export const filteredBeers = (state = [], action) => {
  switch (action.type) {
    case 'SET_FILTERED_BEERS':
      return action.payload
    default:
      return state
  }
}
