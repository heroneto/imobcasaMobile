import axios from 'axios'
const instance = axios.create({
  baseURL: "http://192.168.15.10:8000"
})

export default instance