// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

abstract contract TokemonFactory is Ownable, ERC721 {

	// EVENTS
	event NewTokemon(address indexed owner, uint256 id, uint256 dna, string name);

	// VARIABLES
	struct Tokemon {
    string name;
	uint256 id;
    uint256 dna;
    uint32 level;
    uint8 rarity;
	}

	uint256 fee;

	uint256 COUNT;

	Tokemon[] public tokemons;

	mapping(uint256 => address) public tokemonToOwner;
	mapping(address => uint256) ownerToTokemonCount;

	// INTERNAL FUNCTIONS
	
	// @dev generates a random number of specific length
	// @param power of 10 where the number of zeros is the length of the random number
	// @returns the random number
	function _generateRandomNumber(uint256 _mod) internal view returns (uint256) {
		uint256 randomNum = uint256(
		keccak256(abi.encodePacked(block.timestamp, msg.sender))
		);
		return randomNum % _mod;
	}

    /**
     * @dev Safely mints `tokenId` and transfers it to message.sender
     * @param _name The name of the tokemon
	 * The dna of the tokemon is randomly generated
	 * The level of the tokemon starts at 1
	 * The rarity of the tokemon is randomly generated
     * Requirements:
     * - `tokenId` must not exist.
     * Emits a {Transfer} event.
	 * Emits a {NewTokemon} event.
     */
	function _createTokemon(string memory _name) internal {
		uint8 randomRarity = uint8(_generateRandomNumber(100));
		uint256 randomDna = _generateRandomNumber(10**16);
		Tokemon memory newTokemon = Tokemon(_name, COUNT, randomDna, 1, randomRarity);
		tokemons.push(newTokemon);
		_safeMint(msg.sender, COUNT);
		emit NewTokemon(msg.sender, COUNT, randomDna);
		COUNT++;
	}

	//EXTERNAL FUNCTIONS ONLY ACCESSIBLE BY OWNERS
	/**
	* @dev Token owner can update the fee
	* @param _fee The new fee
	*/
	function updateFee(uint256 _fee) external onlyOwner() {
		fee = _fee;
	}

	// PUBLIC FUNCTIONS
	/**
	* @dev Creates a new random tokemon
	*/
	function createRandomTokemon(string memory _name) public payable {
		require(msg.value >= fee);
		_createTokemon(_name);
	}

}
