import axios from 'axios';

const key = process.env.PINATA_KEY
const secret = process.env.PINATA_SECRET

const JSONToIPFS = async (body) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`
  // make request to Pinata ⬇️
  return axios
      .post(url, body, {
        headers: {
          pinata_api_key: key,
          pinata_secret_api_key: secret,
        }
      })
      .then(function (response) {
        return {
          success: true,
          pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
        }
      })
      .catch(function (error) {
        console.log(error)
        return {
          success: false,
          message: error.message,
        }
  });
}

export default {
  JSONToIPFS
}
