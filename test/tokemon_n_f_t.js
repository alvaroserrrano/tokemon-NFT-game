const TokemonNFT = artifacts.require("TokemonNFT");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("TokemonNFT", function (/* accounts */) {
  it("should assert true", async function () {
    await TokemonNFT.deployed();
    return assert.isTrue(true);
  });
});
