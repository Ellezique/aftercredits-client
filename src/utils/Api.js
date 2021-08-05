import axios from 'axios'

// AXIOS INSTANCE
const api = axios.create({})

// GRAB JWT
// INSTANCE INTERCEPTORS
// Api.interceptors.request.use((req) => {
//   const jwt = localStorage.getItem('jwt')
//   if (jwt) {
//     req.headers["Authorization"] = `Bearer ${jwt}`
//   }
//   return req
// })

// API KEYS
const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API_KEY
const BING_API_KEY = process.env.REACT_APP_BING_API_KEY

// API CONFIGURATIONS
const serverConfig = {
  baseURL: ''
}
const movieConfig = {
  baseURL: 'https://movie-database-imdb-alternative.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': MOVIE_API_KEY,
    'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
  }
}
const bingConfig = {
  baseURL: '',
  headers: {
    'Authorisation': BING_API_KEY,
  }
}

const Api = {
// API ROUTES OBJECT
  // BACKEND ROUTES
  serverApi: {
    // USER TABLE
    user: {
      create(payload) {
        return api.post('/users/id', payload, serverConfig)
      },
      edit(payload) {
        return api.post('/users/id', payload, serverConfig)
      },
      delete(payload) {
        return api.post('/users/id', payload, serverConfig)
      },

      auth: {
        login(payload) {
          return api.post('/auth/login/', payload, serverConfig)
        },
        logout() {
          return api.post('/auth/logout/', {/* something */}, serverConfig)
        },
        resetPassword(payload) {
          return api.post('/auth/reset_password/', payload, serverConfig)
        }
      },
    },
    // MESSAGE TABLE
    message: {
      getAll() {
        return api.get('/messages/all', serverConfig)
      },
      create(payload) {
        return api.post('/messages/id', payload, serverConfig)
      },
      edit(payload) {
        return api.put('/messages/id', payload, serverConfig)
      },
      delete(payload) {
        return api.delete('/messages/id', payload, serverConfig)
      },
    },
    // CARD TABLE
    card: {
      getAll() {
        return api.get('/cards/all')
      },
      create(payload) {
        return api.post('/cards/id', payload, serverConfig)
      },
      edit(payload) {
        return api.put('/cards/id', payload, serverConfig)
      },
      delete(payload) {
        return api.delete('/cards/id', payload, serverConfig)
      },
    }
  },
  // MOVIE ROUTES
  movieApi: {
    movies: {
      //Cleaner style?
      getAll(payload) {
        return api.get('', payload, movieConfig)
      },
      getSelected(payload) {
        return api.post('', payload, movieConfig)
      },
    }
  },
  // BING ROUTES
  bingApi: {

  }
}
export default Api