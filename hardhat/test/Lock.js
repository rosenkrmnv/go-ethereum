const Web3 = require("web3");
const { expect } = require("chai");

describe("Lock contract", function () {
    let web3;
    let accounts;
    let lock;

    before(async function () {
        web3 = new Web3("http://localhost:8545");
        accounts = await web3.eth.getAccounts();

        const Lock = await artifacts.readArtifact("Lock");
        lock = new web3.eth.Contract(Lock.abi);

        lock = await lock.deploy({
            data: Lock.bytecode,
            arguments: [Math.floor(Date.now() / 1000) + 3600]
        }).send({ from: accounts[0], gas: 1000000 });
    });

    it("Should deploy with the correct unlock time", async function () {
        const unlockTime = await lock.methods.unlockTime().call();
        expect(Number(unlockTime)).to.be.greaterThan(0);
    });

    it("Should allow the owner to set a new unlock time", async function () {
        const newTime = Math.floor(Date.now() / 1000) + 7200;
        await lock.methods.setUnlockTime(newTime).send({ from: accounts[0] });

        const updatedUnlockTime = await lock.methods.unlockTime().call();
        expect(Number(updatedUnlockTime)).to.equal(newTime);
    });
});
