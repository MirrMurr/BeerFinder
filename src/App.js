import React, { useState, useEffect } from 'react'
import { Switch, useHistory, Route } from 'react-router-dom'

import { AppBanner } from './Components/Header/AppBanner.js'
import { NavigationPanel } from './Components/Header/NavigationPanel.js'
import { LoginPage } from './Components/Login/LoginPage.js'
import { ListingPage } from './Components/Listing/ListingPage.js'

import './Stylesheets/styles.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // TODO Redux - App state
  const [username, setUsername] = useState('')

  const history = useHistory()

  useEffect(() => {
    const loggedin = window.localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(Boolean(loggedin))
  }, [])

  const handleLogin = (username) => {
    setUsername(username)
    setIsLoggedIn(true)
    window.localStorage.setItem('isLoggedIn', true)
    window.localStorage.setItem('username', username)
    history.push('/listing')
  }

  const handleLogout = () => {
    setUsername('')
    setIsLoggedIn(false)
    window.localStorage.setItem('isLoggedIn', false)
    window.localStorage.setItem('username', '')
    history.push('/')
  }

  return (
    <div>
      <header>
        <AppBanner />
        <NavigationPanel givenUsername={username} LogoutHandler={handleLogout} isVisible={isLoggedIn} />
      </header>
      <Switch>
        <Route path="/listing/">
          <ListingPage />
        </Route>
        <Route path="/">
          <LoginPage LoginHandler={handleLogin} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
