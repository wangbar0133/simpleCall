const { ethers, upgrades } = require('hardhat');
const { expect } = require('chai');
const { setBalance } = require('@nomicfoundation/hardhat-network-helpers');



describe('simpleCall', function () {

  let owner, player;
  let existingStock;

  before(async function () {
    /** SETUP SCENARIO - NO NEED TO CHANGE ANYTHING HERE */
    [owner, player] = await ethers.getSigners();
    
    const ExistingStock = await hre.ethers.getContractFactory("ExistingStock");
    existingStock = await ExistingStock.deploy();
    await existingStock.deployed();
  });

  it('Execution', async function () {
      /** CODE YOUR SOLUTION HERE */
  });

  after(async function () {
      /** SUCCESS CONDITIONS - NO NEED TO CHANGE ANYTHING HERE */
      expect(await existingStock.isSolved()).to.be.true;
  });
});
