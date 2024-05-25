import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x33DeCA0c5fb212f10D1e5412B16CedA8772c7C2d"
);

export default instance;
