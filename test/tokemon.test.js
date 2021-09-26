const Tokemon = artifacts.require('TokemonToken');
const utils = require('./helpers/utils');

const tokemonNames = ['testokemon', 'toketest'];
/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract('TokemonToken', function (accounts) {
  let tokemonContractInstance;
  let [account1, account2] = accounts;
  beforeEach(async () => {
    tokemonContractInstance = await Tokemon.new('TokemonToken', 'TNFT');
  });
  it('should assert true', async function () {
    await Tokemon.deployed();
    return assert.isTrue(true);
  });
  it('should deploy contract properly', async () => {
    const TokemonToken = await Tokemon.deployed();
    expect(TokemonToken.address).to.not.be.null;
  });
  it('sets an owner', async () => {
    const owner = await tokemonContractInstance.owner.call();
    expect(owner).to.equal(account1);
    expect(owner).to.not.equal(account2);
  });
  it('should create a new tokemon', async () => {
    const result = await tokemonContractInstance.createRandomTokemon(
      tokemonNames[0],
      {
        from: account1,
      }
    );
    expect(result.logs[0].event).to.be.equal('Transfer');
    expect(result.logs[1].event).to.be.equal('NewTokemon');
    expect(result.receipt.status).to.equal(true);
    const tokemons = await tokemonContractInstance.getTokemons();
    expect(tokemons.length).to.equal(1);
    expect(tokemons[0].name).to.equal(tokemonNames[0]);
    expect(tokemons[0].level).to.equal('1');
    const account1Balance = await tokemonContractInstance.balanceOf(account1);
    expect(account1Balance.toNumber()).to.equal(1);
  });
  it('should not allow two tokemons being created', async () => {
    await tokemonContractInstance.createRandomTokemon(tokemonNames[0], {
      from: account1,
    });
    await utils.shouldThrow(
      tokemonContractInstance.createRandomTokemon(tokemonNames[1], {
        from: account1,
      })
    );
  });
});
