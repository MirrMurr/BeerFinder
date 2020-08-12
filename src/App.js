import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import { Header } from './Components/Header.js'
import { LoginPage } from './Components/LoginPage.js'
import { Listing } from './Components/Listing.js'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const HandleLoginButtonClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div>
      <Header LogoutHandler={HandleLoginButtonClick} isLoggedIn={isLoggedIn} />
      <Route exact path="/">
        <LoginPage LoginHandler={HandleLoginButtonClick} />
      </Route>
      <Route exact path="/listing" component={Listing} />
    </div>
  )
}

export default App
