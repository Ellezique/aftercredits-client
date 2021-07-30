import axios from 'axios'

// API KEYS
const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API_KEY

// API CONFIGURATIONS
const serverConfig = {
  baseURL: ''
}
const movieConfig = {
  baseURL = 'https://movie-database-imdb-alternative.p.rapidapi.com',
  headers = {
    'x-rapidapi-key': MOVIE_API_KEY,
    'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
  }
}
const googleConfig = {
  baseURL: ''
}

// API ROUTES
export default {
  // BACKEND ROUTES
  serverApi: {
    // USER TABLE
    user: {
      create() {
        return Api.post('/users/id', payload, serverConfig)
      },
      edit() {
        return Api.post('/users/id', payload, serverConfig)
      },
      delete() {
        return Api.post('/users/id', payload, serverConfig)
      },

      auth: {
        login(payload) {
          return Api.post('/auth/login/', payload, serverConfig)
        },
        logout() {
          return Api.post('/auth/logout/', {/* something */}, serverConfig)
        },
        resetPassword(payload) {
          return Api.post('/auth/reset_password/', payload, serverConfig)
        }
      },
    },
    // MESSAGE TABLE
    message: {
      getAll() {
        return Api.get('/messages/all', serverConfig)
      },
      create(payload) {
        return Api.post('/messages/id', payload, serverConfig)
      },
      edit(payload) {
        return Api.put('/messages/id', payload, serverConfig)
      },
      delete() {
        return Api.delete('/messages/id', payload, serverConfig)
      },
    },
    // CARD TABLE
    card: {
      getAll() {
        return Api.get('/cards/all')
      },
      create(payload) {
        return Api.post('/cards/id', payload, serverConfig)
      },
      edit(payload) {
        return Api.put('/cards/id', payload, serverConfig)
      },
      delete() {
        return Api.delete('/cards/id', payload, serverConfig)
      },
    } 
  },
  // MOVIE ROUTES
  movieApi: {
    movie: {
      //Cleaner style?
      getAll: payload => Api.get('', payload),
      getSelected(payload) {
        return Api.post('', payload)
      },
    }
  },
  // GOOGLE ROUTES
  googleApi: {

  }
}

// AXIOS INSTANCE
const Api = axios.create({})

// INSTANCE INTERCEPTORS
// Api.interceptors.request.use((req) => {
//   const jwt = localStorage.getItem('jwt')
//   if (jwt) {
//     req.headers["Authorization"] = `Bearer ${jwt}`
//   }
//   return req
// })