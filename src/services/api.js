import axios from "axios"

const axiosClient = axios.create({
  baseURL: "https://61c9685420ac1c0017ed8c28.mockapi.io/api/",
  headers: {
    "content-type": "application/json",
  },
})

export const api = (method, endpoint, payload) => {
  return axiosClient(endpoint, { method: method, data: payload }).then(
    (response) => {
      return response.data
    }
  ).catch(error => {
      console.log(error);
  })
}
