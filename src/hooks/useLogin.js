import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { login, logout } from 'store/login'
import { resetPagination } from 'store/pagination'
import { clearFilters } from 'store/filterConditions'

import { saveState, loadState } from 'services/persistence/sessionStorageService'

export const useLogin = (params) => {
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    const state = loadState()
    if (state) {
      const { isLoggedIn, username } = state
      if (isLoggedIn) {
        dispatch(login({ username }))
      } else {
        dispatch(logout())
      }
    }
  }, [dispatch])

  const handleLogin = (username) => {
    saveState({
      username,
      isLoggedIn: true
    })

    dispatch(login({ username }))
    dispatch(resetPagination())
    dispatch(clearFilters())
    history.push('/listing')
  }

  const handleLogout = () => {
    saveState({
      username: '',
      isLoggedIn: false
    })

    dispatch(logout())
    history.push('/login')
  }

  return { handleLogin, handleLogout }
}
