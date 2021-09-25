// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./TokemonFactory.sol";

contract TokemonToken is TokemonFactory  {

  constructor(string memory _name, string memory _symbol)
    ERC721(_name, _symbol)
  {}

  /**
  * @dev Token owner can withdraw
  */
  function withdraw() external onlyOwner() payable {
    address payable _owner = payable(owner());
    _owner.transfer(address(this).balance);
  }

  // GETTERS
  /** @dev get tokemons
  */
  function getTokemons() public view returns(Tokemon[] memory) {
    return tokemons;
  }

  /** @dev Get tokemons by owner
  */
  function getOwnerTokemons(address _owner) public view returns (Tokemon[] memory) {
    Tokemon[] memory ownerTokemons = new Tokemon[](balanceOf(_owner));
    uint256 ownerTokemonCount = 0;
    for (uint256 i = 0; i < tokemons.length; i++) {
      if (ownerOf(i) == _owner) {
        ownerTokemons[i] = tokemons[i];
        ownerTokemonCount++;
      }
    }
    return ownerTokemons;
  }

  //SETTERS
  /**
  * @dev Level up a tokemon
  * @param _tokemonId The id of the tokemon to level up
  * requires that _tokemonId is owned by the caller
  */
  function levelUp(uint256 _tokemonId) public onlyOwner() {
    Tokemon storage tokemon = tokemons[_tokemonId];
    tokemon.level++;
  }
}
