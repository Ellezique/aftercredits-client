export default function reducer(state, action) {
  switch(action.type) {
    case 'isLoggedIn': {
      return {
        ...state,
        isLoggedIn: action.data
      }
    }
    default: return state
  }
}