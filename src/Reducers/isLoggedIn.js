export const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case 'SET_ISLOGGEDIN':
      return action.isLoggedIn
    case 'LOG_IN':
      return true
    case 'LOG_OUT':
      return false
    default:
      return state
  }
}
