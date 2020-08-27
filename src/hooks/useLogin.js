import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { login, logout } from 'store/login'
import { resetPagination } from 'store/pagination'
import { clearFilters } from 'store/filterConditions'

export const useLogin = (params) => {
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedin = window.localStorage.getItem('isLoggedIn') === 'true'
    const username = window.localStorage.getItem('username')
    if (loggedin) {
      dispatch(login({ username }))
    } else {
      dispatch(logout())
    }
  }, [dispatch])

  const handleLogin = (username) => {
    window.localStorage.setItem('isLoggedIn', true)
    window.localStorage.setItem('username', username)
    dispatch(login({ username }))
    dispatch(resetPagination())
    dispatch(clearFilters())
    history.push('/listing')
  }

  const handleLogout = () => {
    window.localStorage.setItem('isLoggedIn', false)
    window.localStorage.setItem('username', '')
    dispatch(logout())
    history.push('/')
  }

  return { handleLogin, handleLogout }
}
