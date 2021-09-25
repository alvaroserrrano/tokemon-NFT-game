// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./TokemonFactory.sol";

contract TokemonToken is TokemonFactory  {

  constructor(string memory _name, string memory _symbol)
    ERC721(_name, _symbol)
  {}

  
}
