pragma solidity >=0.8.10;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/NovaKoin.sol";

contract TestNovaKoin {
    function testInitialBalanceUsingDeployedContract() public {
        NovaKoin meta = NovaKoin(DeployedAddresses.NovaKoin());

        uint expected = 100000;

        Assert.equal(
            meta.getBalance(msg.sender),
            expected,
            "Owner should have 10000 NovaKoin initially"
        );
    }

    function testInitialBalanceWithNewNovaKoin() public {
        NovaKoin meta = new NovaKoin();

        uint expected = 100000;

        Assert.equal(
            meta.getBalance(address(this)),
            expected,
            "Owner should have 10000 NovaKoin initially"
        );
    }
}
