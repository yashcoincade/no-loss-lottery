const { run } = require("hardhat")

async function verify(contractAddress, args) {
    console.log("Verifying Contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArgs: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified")
        } else {
            console.log("Error: ", e)
        }
    }
}

module.exports = { verify }
