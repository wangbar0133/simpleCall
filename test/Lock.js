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
      const Exp = await hre.ethers.getContractFactory("Exp");
      const exp = await Exp.deploy(existingStock.address);
      await exp.connect(player).deployed();
      
      await exp.connect(player).approve();
      await exp.connect(player).transfer();
      await exp.connect(player).getFlag(); 
  });

  after(async function () {
      /** SUCCESS CONDITIONS - NO NEED TO CHANGE ANYTHING HERE */
      expect(await existingStock.isSolved()).to.be.true;
  });
});
