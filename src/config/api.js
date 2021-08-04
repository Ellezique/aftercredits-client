import axios from 'axios'

const aftercreditsAPI = axios.create({
  baseURL: "http://localhost:3000"
})

export default aftercreditsAPI