import { createAlchemyWeb3 } from '@alch/alchemy-web3'
import contractABI from '~/static/contract-abi.json'
import pinata from './pinata.js'
const key = `https://eth-ropsten.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`
const web3 = createAlchemyWeb3(key)
// const contractAddress = '0x4C4a07F737Bf57F6632B6CAB089B78f62385aCaE'
const contractAddress = process.env.CT_ADDRESS
const FIXED_AMOUNT = web3.utils.toWei('0.05', 'ether')

console.log('FIXED_AMOUNT', FIXED_AMOUNT)
console.log('web3.utils.utf8ToHex(FIXED_AMOUNT)', web3.utils.utf8ToHex(FIXED_AMOUNT))

const createWeb3 = async () => {
  window.contract = await new web3.eth.Contract(contractABI, contractAddress)
  console.log('contract methods')
  console.log(window.contract.methods)
}

const mint = async (payload) => {
  const uploadResult = await uploadToPinata(payload)
  if (!uploadResult.success) {
    return {
      success: false,
      status: '😢 Something went wrong while uploading your tokenURI.'
    }
  }
  const tokenURI = uploadResult.pinataUrl
  console.log('tokenURI', tokenURI)
  return await createTransaction(tokenURI)
}

const uploadToPinata = async (payload) => {
  const metadata = { ...payload }
  const request = await pinata.JSONToIPFS(metadata)
  return request
}

const createTransaction = async (tokenURI) => {
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    // value: '0x3530303030303030303030303030303030', // convert to base16
    data: window.contract.methods.mintNFT(window.ethereum.selectedAddress, tokenURI).encodeABI() // make call to NFT smart contract
  }
  try {
    if (contractAddress === '') {
      throw new Error('contractAddress not loaded')
    }
    const txHash = await window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      })
    return {
      success: true,
      status: 'https://ropsten.etherscan.io/tx/' + txHash
    }
  } catch (error) {
    return {
      success: false,
      status: '😥 Something went wrong: ' + error.message
    }
  }
}

export default {
  mint,
  createWeb3
}
