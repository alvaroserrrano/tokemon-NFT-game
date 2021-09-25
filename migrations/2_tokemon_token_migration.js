const Tokemon = artifacts.require('TokemonToken');

module.exports = function (deployer) {
  deployer.deploy(Tokemon);
};
