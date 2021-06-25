import axios from 'axios'
const server = axios.create({
  baseURL: 'http://localhost:8080/mt',
  timeout: 5000
})

export default server
