import axios from 'axios'

const HOST = __DEV__ ? "http://192.168.15.8:8000" : "https://imobcasa.herokuapp.com"
const instance = axios.create({
  baseURL: HOST
})

export default instance