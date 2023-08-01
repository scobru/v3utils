// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { Contract, ContractFactory } from 'ethers';
import { ethers, tenderly } from 'hardhat';

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const name: string = 'V3Utils';
  const constructorArgs: Array<string | number | Array<string | string>> = [
    '0xC36442b4a4522E871399CD717aBDD847Ab11FE88', '0xE592427A0AEce92De3Edee1F18E0157C05861564',
  ];

  const factory: ContractFactory = await ethers.getContractFactory(name);
  const contract: Contract = await factory.deploy(...constructorArgs);
  await contract.deployed();

  console.log(name + ' deployed to:', contract.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
