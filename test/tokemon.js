const Tokemon = artifacts.require('TokemonToken');

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
  it('should create a new tokemon', async () => {
    const result = await tokemonContractInstance.createRandomTokemon(
      tokemonNames[0],
      {
        from: account1,
      }
    );
    expect(result.receipt.status).to.equal(true);
  });
});
