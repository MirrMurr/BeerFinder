import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import { Login } from './Components/Login.js'
import { Listing } from './Components/Listing.js'
import { LoginButton } from './Components/LoginButton.js'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const HandleLoginButton = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div>
      <LoginButton isLoggedIn={isLoggedIn} onClick={HandleLoginButton} />
      <Route exact path="/" component={Login} />
      <Route exact path="/listing" component={Listing} />
    </div>
  )
}

export default App
