import axios from 'axios'
const instance = axios.create({
  baseURL: "http://192.168.15.9:8000"
})

export default instance