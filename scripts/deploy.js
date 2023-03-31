
const hre = require("hardhat");

async function main() {
 
  const winnerContractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"
  const EventWinner = await hre.ethers.getContractFactory("EventWinner");
  const eventWinner = await EventWinner.deploy();

  await eventWinner.deployed();

  console.log(`contract is deployed to ${eventWinner.address}`);

  await eventWinner.callWinner(winnerContractAddress);
}

//Deployed Event Winner Contract Address 
// https://goerli.etherscan.io/address/0xb7e309973cd06895aae8cb899ffea991db4eb853

//Winning Attempt Trasaction
//https://goerli.etherscan.io/tx/0x29ea706d3d4d45fd9d4c6b66f314e330b65aa63d77aa0739725a26e6e38767ed


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
