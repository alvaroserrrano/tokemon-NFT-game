const Tokemon = artifacts.require('Tokemon');

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract('Tokemon', function (/* accounts */) {
  it('should assert true', async function () {
    await Tokemon.deployed();
    return assert.isTrue(true);
  });
  it('');
});
