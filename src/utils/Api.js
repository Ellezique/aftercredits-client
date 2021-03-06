import axios from 'axios'

// AXIOS INSTANCE
const api = axios.create({})

// GRAB JWT
// INSTANCE INTERCEPTORS
api.interceptors.request.use((req) => {
  const token = sessionStorage.getItem('token')
  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`
  }
  return req
})

// API KEYS
const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API_KEY

// API CONFIGURATIONS
const serverConfig = {
  baseURL: 'https://aftercredits-api.herokuapp.com/api'
}
const movieConfig = {
  baseURL: 'https://movie-database-imdb-alternative.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': MOVIE_API_KEY,
    'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
  },
}

const Api = {
// API ROUTES OBJECT
  // BACKEND ROUTES
  serverApi: {
    // USER TABLE
    users: {
      create(payload) {
        return api.post('/users', payload, serverConfig)
      },
      edit(payload) {
        return api.post(`/users/${payload.id}`, payload, serverConfig)
      },
      delete(payload) {
        return api.post(`/users/${payload.id}`, payload, serverConfig)
      },
      // AUTHORISATION ROUTES
      auth: {
        signup(payload) {
          return api.post('/auth/sign_up', payload, serverConfig)
        },
        signin(payload) {
          return api.post('/auth/sign_in', payload, serverConfig)
        },
        resetPassword(payload) {
          return api.post('/auth/reset_password/', payload, serverConfig)
        }
      },
    },
    // MESSAGE TABLE
    messages: {
      getAll() {
        return api.get('/messages', serverConfig)
      },
      getOne(payload) {
        return api.get(`/messages/${payload.id}`, serverConfig)
      },
      getUserAll() {
        return api.get('/messages/user', serverConfig)
      },
      create(payload) {
        return api.post('/messages', payload, serverConfig)
      },
      edit(payload) {
        return api.put(`/messages/${payload.id}`, {m_text: payload.m_text}, serverConfig)
      },
      delete(id) {
        return api.delete(`/messages/${id}`, serverConfig)
      },
    },
    // CARD TABLE
    cards: {
      getAll() {
        return api.get('/cards', serverConfig)
      },
      getOne(payload) {
        return api.get(`/cards/${payload.id}`, serverConfig)
      },
      create(payload) {
        return api.post('/cards', payload, serverConfig)
      },
      edit(payload) {
        return api.put(`/cards/${payload.id}`, payload, serverConfig)
      },
      delete(payload) {
        return api.delete(`/cards/${payload.id}`, payload, serverConfig)
      },
    }
  },
  // MOVIE ROUTES
  movieApi: {
    movies: {
      getDetails(payload) {
        movieConfig.params = payload
        return api.get('/', movieConfig)
      },
    }
  }
}
export default Api