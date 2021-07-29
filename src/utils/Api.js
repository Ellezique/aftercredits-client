import axios from 'axios'


const options = {
  method: 'GET',
  url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
  params: {i: 'tt4154796', r: 'json'},
  headers: {
    'x-rapidapi-key': 'd371df7a90mshf4263ba5b68493dp1ea1dejsnf9e30b5c9d4f',
    'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// //BASEURLs
// let apiUrl = ''
// if(database) {
//   apiUrl = ''
// }
// if(movie) {
//   apiUrl = 'https://movie-database-imdb-alternative.p.rapidapi.com/'
// }
// if(google) {
//   apiUrl = ''
// }

// const Get = async ({url, ext, params, callback}) => {
//   try {
//     const { data } = await api.get(ext, params)
    
//     callback && callback(data)
//   } catch ({ message }) {
//     setErrorMessage(`Error: ${message}`)
//   }
// }
// const addMessage = async (event) => {
//   event.preventDefault()
//   try {
//     // send a post request to add the new card to the backend
//     const { data } = await api.post("/messages", {
//       username,
//       text,
//       date,
//       spoiler
//     })
//     // update the component state with the new card
//     dispatch({type: 'addMessage', payload: data})
//   } catch ({ message }) {
//     setErrorMessage(`Error: ${message}`)
//   }
// }
// const addMessage = async (event) => {
//   event.preventDefault()
//   try {
//     // send a post request to add the new card to the backend
//     const { data } = await api.post("/messages", {
//       username,
//       text,
//       date,
//       spoiler
//     })
//     // update the component state with the new card
//     dispatch({type: 'addMessage', payload: data})
//   } catch ({ message }) {
//     setErrorMessage(`Error: ${message}`)
//   }
// }
// const addMessage = async (event) => {
//   event.preventDefault()
//   try {
//     // send a post request to add the new card to the backend
//     const { data } = await api.post("/messages", {
//       username,
//       text,
//       date,
//       spoiler
//     })
//     // update the component state with the new card
//     dispatch({type: 'addMessage', payload: data})
//   } catch ({ message }) {
//     setErrorMessage(`Error: ${message}`)
//   }
// }


export const api = axios.create({
  baseURL: apiUrl
})

// api.interceptors.request.use((req) => {
//   const jwt = localStorage.getItem('jwt')
//   if (jwt) {
//     req.headers["Authorization"] = `Bearer ${jwt}`
//   }
//   return req
// })