import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { LoginForm } from './Components/LoginPage.js'
import { ListingPage } from './Components/ListingPage.js'
import { AppBanner } from './Components/AppBanner.js'
import { NavigationPanel } from './Components/NavigationPanel.js'
import './Stylesheets/styles.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
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
        <Route exact path="/">
          <LoginForm LoginHandler={handleLogin} />
        </Route>
        <Route exact path="/listing">
          <ListingPage isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
