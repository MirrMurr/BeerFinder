import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

// function useValidation (username) {
//   const [isValidated, setIsValidated] = useState(false)
//   useEffect(() => {
//     fetch('https://yesno.wtf/api', {
//       method: 'GET',
//       headers: { Accept: 'application/json' }
//     })
//       .then(res => res.json())
//       .then(response => {
//         setIsValidated(response.answer === 'yes')
//       })
//   })
//   return isValidated
// }

export const LoginPage = ({ LoginHandler }) => {
  const [username, setUsername] = useState('')
  const [firstLoad, setFirstLoad] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isValidated, setIsValidated] = useState(false)
  const history = useHistory()
  // const isUserValidated = useValidation(username)

  let error = username === '' ? 'Username field must not be empty!' : null
  if (!error) {
    error = username.length > 16 ? 'Max. 16 characters.' : null
  }

  async function validateUsername (username) {
    fetch('https://yesno.wtf/api', {
      method: 'GET',
      headers: { Accept: 'application/json' }
    })
      .then(res => res.json())
      .then(response => {
        console.log(response.answer)
        setIsValidated(response.answer === 'yes')
      })
  }

  useEffect(() => {
    setFirstLoad(false)
  }, [username])

  useEffect(() => {
    setFirstLoad(true)
  }, [])

  // TODO useEffect -> call yesno.wtf/api / useValidation own hook
  function handleSubmit (e) {
    e.preventDefault()
    setIsSubmitted(true)
    validateUsername(username)
    if (!error && isValidated) {
      LoginHandler(username)
      history.push('/listing')
    }
  }

  const handleInputChange = (e) => {
    setUsername(e.target.value.trim())
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input id="usernameInput" type="text" placeholder="Username" value={username} onChange={handleInputChange} />
        <button disabled={Boolean(error)} type="submit">Log in</button>
      </form>
      <div className="error">{!firstLoad ? error : null}</div>
      <div className="not-validated">
        {(isValidated || firstLoad) && isSubmitted ? null : 'Your username has not been found eligible.'}
      </div>
    </div>
  )
}

LoginPage.propTypes = {
  LoginHandler: PropTypes.func
}
