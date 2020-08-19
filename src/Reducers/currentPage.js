export const currentPage = (state = 1, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return action.pageNumber
    case 'RESET_PAGINATION':
      return 1
    default:
      return state
  }
}
