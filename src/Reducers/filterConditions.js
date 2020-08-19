export const filterConditions = (state = { name: '', fromAbv: 0, toAbv: 100 }, action) => {
  switch (action.type) {
    case 'SET_FILTER_CONDITIONS':
      return action.payload
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_FROM_ABV':
      return {
        ...state,
        name: action.fromAbv
      }
    case 'SET_TO_ABV':
      return {
        ...state,
        name: action.toAbv
      }
    default:
      return state
  }
}
