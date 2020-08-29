import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useLogin } from 'hooks/useLogin'
import { validateUsername } from 'store/login'
import { ErrorTypes } from 'constants/ErrorTypes'

export const useLoginForm = () => {
  const { handleLogin } = useLogin()

  const username = useSelector(state => state.login.username)
  const isLoggedIn = useSelector(state => state.login.isLoggedIn)
  const loading = useSelector(state => state.login.loading) === 'pending'
  const errorType = useSelector(state => state.login.errorType)
  const isValid = useSelector(state => state.login.isValid)

  const [usernameInputValue, setUsernameValue] = useState(username)
  const [retriedAfterSubmitRejection, setRetried] = useState(true)
  const error = (errorType !== ErrorTypes.None) && !retriedAfterSubmitRejection

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setRetried(true)
    setUsernameValue(e.target.value.trim())
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setRetried(false)
    dispatch(validateUsername(usernameInputValue))
  }

  useEffect(() => {
    if (isValid && !isLoggedIn) {
      handleLogin(usernameInputValue)
    }
  }, [handleLogin, isValid, usernameInputValue, isLoggedIn])

  return { isLoggedIn, isValid, loading, onSubmit, handleInputChange, error, errorType }
}
