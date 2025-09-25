import hre from "hardhat";
import fs from "fs";

interface ContractInfo {
  address: string;
  network: string;
  deployedAt: string;
}

async function main(): Promise<void> {
  console.log("Deploying HelloWorld contract...");

  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy("Hello, Blockchain World!");

  await helloWorld.waitForDeployment();

  const contractAddress = await helloWorld.getAddress();
  console.log("HelloWorld deployed to:", contractAddress);
  console.log("Contract owner:", await helloWorld.getOwner());
  console.log("Initial greeting:", await helloWorld.getGreeting());

  // Save the contract address for frontend use
  const contractInfo: ContractInfo = {
    address: contractAddress,
    network: hre.network.name,
    deployedAt: new Date().toISOString()
  };
  
  fs.writeFileSync(
    './contract-address.json', 
    JSON.stringify(contractInfo, null, 2)
  );
  
  console.log("Contract info saved to contract-address.json");
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
