import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { ErrorTypes } from 'constants/ErrorTypes.js'
import { useLogin } from 'hooks/useLogin'

import { validateUsername } from 'store/login'

import { ErrorTypes } from 'constants/ErrorTypes'

export const useLoginForm = () => {
  const { handleLogin } = useLogin()

  const isLoggedIn = useSelector(state => state.login.isLoggedIn)
  const loading = useSelector(state => state.login.loading) === 'pending'
  const errorType = useSelector(state => state.login.errorType)

  const [username, setUsername] = useState('')
  const [retriedAfterSubmitRejection, setRetried] = useState(true)
  const error = (errorType !== ErrorTypes.None) && !retriedAfterSubmitRejection

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setRetried(true)
    setUsername(e.target.value.trim())
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setRetried(false)
    dispatch(validateUsername(username))
    handleLogin(username)
  }

  return { isLoggedIn, loading, onSubmit, handleInputChange, error, errorType }
}
