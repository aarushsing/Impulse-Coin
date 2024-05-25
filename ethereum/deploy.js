const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "season neither north praise sibling seminar bag when since aware eyebrow update",
  // remember to change this to your own phrase!
  "https://sepolia.infura.io/v3/573200165dd3431e90979271176d0b46"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: "24000000 ", from: accounts[0] }); //1400000

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
