//const ConvertLib = artifacts.require("ConvertLib");
const Promo = artifacts.require("Promo");
//const Promethium = artifacts.require("Promethium");


module.exports = function(deployer) {
  //deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, MetaCoin);

  deployer.deploy(Promo);
  //deployer.deploy(Promethium);
};
