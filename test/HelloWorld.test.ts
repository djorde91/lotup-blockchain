import { expect } from "chai";
import { ethers } from "hardhat";
import { HelloWorld } from "../typechain-types";

describe("HelloWorld", function () {
  let helloWorld: HelloWorld;
  let owner: any;
  let addr1: any;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    
    const HelloWorldFactory = await ethers.getContractFactory("HelloWorld");
    helloWorld = await HelloWorldFactory.deploy("Hello, Blockchain World!");
    await helloWorld.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await helloWorld.getOwner()).to.equal(owner.address);
    });

    it("Should set the initial greeting", async function () {
      expect(await helloWorld.getGreeting()).to.equal("Hello, Blockchain World!");
    });
  });

  describe("Greeting Functions", function () {
    it("Should allow anyone to get the greeting", async function () {
      const greeting = await helloWorld.connect(addr1).getGreeting();
      expect(greeting).to.equal("Hello, Blockchain World!");
    });

    it("Should allow anyone to set a new greeting", async function () {
      const newGreeting = "Hello from the test!";
      await helloWorld.connect(addr1).setGreeting(newGreeting);
      expect(await helloWorld.getGreeting()).to.equal(newGreeting);
    });

    it("Should emit GreetingUpdated event when greeting is changed", async function () {
      const newGreeting = "New greeting!";
      await expect(helloWorld.setGreeting(newGreeting))
        .to.emit(helloWorld, "GreetingUpdated")
        .withArgs(newGreeting, owner.address);
    });

    it("Should not allow empty greeting", async function () {
      await expect(helloWorld.setGreeting(""))
        .to.be.revertedWith("Greeting cannot be empty");
    });
  });
});
