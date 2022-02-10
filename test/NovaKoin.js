const NovaKoin = artifacts.require("NovaKoin4");

contract("NovaKoin", accounts => {
  it("should put 10000 NovaKoin in the first account", async () => {
    const instance = await NovaKoin.deployed();
    const balance = await instance.getBalance.call(accounts[0]);
    assert.equal(balance.valueOf(), 100000, "100000 wasn't in the first account");
  });

  it("should call a function that depends on a linked library", async () => {
    const instance = await NovaKoin.deployed();
    const NovaKoinBalance = await instance.getBalance.call(accounts[0]);
    const NovaKoinBalanceInEth = await instance.getBalanceInEth.call(
      accounts[0],
    );

    const expected = 2 * NovaKoinBalance.toNumber();

    assert.equal(
      NovaKoinBalanceInEth.toNumber(),
      expected,
      "Library function returned unexpeced function, linkage may be broken",
    );
  });

  it("should send coin correctly", async () => {
    const instance = await NovaKoin.deployed();

    const account1 = accounts[0];
    const account2 = accounts[1];

    // get initial balances
    const initBalance1 = await instance.getBalance.call(account1);
    const initBalance2 = await instance.getBalance.call(account2);

    // send coins from account 1 to 2
    const amount = 10;
    await instance.sendCoin(account2, amount, { from: account1 });

    // get final balances
    const finalBalance1 = await instance.getBalance.call(account1);
    const finalBalance2 = await instance.getBalance.call(account2);

    assert.equal(
      finalBalance1.toNumber(),
      initBalance1.toNumber() - amount,
      "Amount wasn't correctly taken from the sender",
    );
    assert.equal(
      finalBalance2.toNumber(),
      initBalance2.toNumber() + amount,
      "Amount wasn't correctly sent to the receiver",
    );
  });
});
