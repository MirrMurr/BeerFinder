import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import { LoginPage } from './Components/LoginPage.js'
import { ListingPage } from './Components/ListingPage.js'
import { AppBanner } from './Components/AppBanner.js'
import { NavigationPanel } from './Components/NavigationPanel.js'
// import PropTypes from 'prop-types'
import './Stylesheets/styles.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  const HandleLoginButtonClick = (username) => {
    setIsLoggedIn(!isLoggedIn)
    setUsername(username)
  }

  return (
    <div>
      <header>
        <AppBanner />
        <NavigationPanel username={username} LogoutHandler={HandleLoginButtonClick} isVisible={isLoggedIn} />
      </header>
      <Route exact path="/">
        <LoginPage LoginHandler={HandleLoginButtonClick} />
      </Route>
      <Route exact path="/listing" component={ListingPage} />
    </div>
  )
}

export default App
