//const ConvertLib = artifacts.require("ConvertLib");
const RadioGugu = artifacts.require("RadioGugu");
//const Promethium = artifacts.require("Promethium");


module.exports = function(deployer) {
  //deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, NovaKoin4);

  deployer.deploy(RadioGugu);
  //deployer.deploy(Promethium);
};
