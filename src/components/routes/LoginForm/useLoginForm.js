import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { ErrorTypes } from 'constants/ErrorTypes.js'
import { useLogin } from 'hooks/useLogin'

export const useLoginForm = () => {
  const { handleLogin } = useLogin()
  const isLoggedIn = useSelector(state => state.login.isLoggedIn)
  const [username, setUsername] = useState('')

  const [retriedAfterSubmitRejection, setRetried] = useState(true)
  const [isValidated, setIsValidated] = useState(false)

  const [loading, setLoading] = useState(false) // TODO yesno.wtf api: loading, error ??
  const [errorType, setErrorType] = useState(ErrorTypes.NONE)
  const error = !retriedAfterSubmitRejection && !isValidated

  useEffect(() => {
    if (username === null) return
    if (username === '') {
      setErrorType(ErrorTypes.EmptyUsername)
    } else if (username.length > 16) {
      setErrorType(ErrorTypes.LongUsername)
    } else {
      setErrorType(ErrorTypes.NONE)
    }
    setRetried(true)
  }, [username])

  const handleInputChange = (e) => {
    setUsername(e.target.value.trim())
  }

  const validateUsername = async (username) => {
    setLoading(true)
    const response = await axios.get('https://yesno.wtf/api')
    setLoading(false)
    return response.data.answer === 'yes'
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setRetried(false)
    if ([ErrorTypes.EmptyUsername, ErrorTypes.LongUsername].includes(errorType)) {
      return
    }
    validateUsername(username)
      .then(isValid => {
        setIsValidated(isValid)
        if (isValid) {
          handleLogin(username)
        } else {
          setErrorType(ErrorTypes.Validation)
        }
      })
  }

  return { isLoggedIn, loading, onSubmit, handleInputChange, error, errorType }
}
