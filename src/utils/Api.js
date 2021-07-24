import axios from 'axios'

let apiUrl = ''

if(database) {
  apiUrl = ''
}
if(movie) {
  apiUrl = 'https://movie-database-imdb-alternative.p.rapidapi.com/'
}
if(google) {
  apiUrl = ''
}

export const api = axios.create({
  baseURL: apiUrl
})

api.interceptors.request.use((req) => {
  const jwt = localStorage.getItem('jwt')
  if (jwt) {
    req.headers["Authorization"] = `Bearer ${jwt}`
  }
  return req
})