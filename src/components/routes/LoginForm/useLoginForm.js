import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import { useLogin } from 'hooks/useLogin'
import { validateUsername, error } from 'store/login'
import { ErrorTypes } from 'constants/ErrorTypes'

export const useLoginForm = () => {
  const { handleLogin } = useLogin()
  const { register, handleSubmit, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' })
  const dispatch = useDispatch()

  const username = useSelector(state => state.login.username)
  const isLoggedIn = useSelector(state => state.login.isLoggedIn)
  const loading = useSelector(state => state.login.loading) === 'pending'
  const isValid = useSelector(state => state.login.isValid)
  const errorType = useSelector(state => state.login.error)

  const [usernameInputValue, setUsernameValue] = useState(username)

  const handleInputChange = (e) => {
    dispatch(error(ErrorTypes.None))
    setUsernameValue(e.target.value.trim())
  }

  const onSubmit = () => {
    dispatch(validateUsername(usernameInputValue))
  }

  useEffect(() => {
    if (isValid && !isLoggedIn) {
      handleLogin(usernameInputValue)
    }
  }, [isValid, isLoggedIn, handleLogin, usernameInputValue])

  return { usernameInputValue, isLoggedIn, loading, onSubmit, handleInputChange, register, handleSubmit, errors, errorType }
}
