const TokemonToken = artifacts.require('TokemonToken');

module.exports = function (deployer) {
  deployer.deploy(TokemonToken, 'TokemonToken', 'TNFT');
};
