import axios from 'axios'
const instance = axios.create({
  baseURL: "http://192.168.14.112:8000"
})

export default instance