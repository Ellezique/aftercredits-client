export default function reducer(state, action) {
  switch(action.type) {
    case 'setCards': {
      return {
        ...state,
        cards: action.data
      }
    }
    case 'setCardsData': {
      return {
        ...state,
        cards: action.data
      }
    }
    case 'setLoggedInUser': {
      return {
        ...state,
        loggedInUser: action.data
      }
    }
    case 'setToken': {
      return {
        ...state,
        token: action.data
      }
    }
    case 'setIsAdmin': {
      return {
        ...state,
        isAdmin: action.data
      }
    }
    case 'logout': {
      return {
        ...state,
        loggedInUser: action.data,
        token: action.data,
        isAdmin: action.data
      }
    }
    case 'loading': {
      return {
        ...state,
        loading: action.data
      }
    }
    default: return state
  }
}