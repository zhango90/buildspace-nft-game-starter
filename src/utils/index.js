import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../constants";
import myEpicGame from "./MyEpicGame.json";

export const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const gameContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    myEpicGame.abi,
    signer
  );
  return gameContract;
};

export const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber()
  };
};
