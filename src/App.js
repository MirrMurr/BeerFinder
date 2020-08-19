import React, { useEffect } from 'react'
import { Switch, useHistory, Route } from 'react-router-dom'

import store from 'Stores/appStore'

import { AppBanner } from 'Components/Header/AppBanner.js'
import { NavigationPanel } from 'Components/Header/NavigationPanel.js'
import { LoginPage } from 'Pages/LoginPage.js'
import { ListingPage } from 'Pages/ListingPage.js'

import 'Stylesheets/styles.css'

const App = () => {
  const history = useHistory()

  useEffect(() => {
    const loggedin = window.localStorage.getItem('isLoggedIn') === 'true'
    const username = window.localStorage.getItem('username')
    store.dispatch({ type: 'SET_ISLOGGEDIN', isLoggedIn: loggedin })
    store.dispatch({ type: 'SET_USERNAME', username: username })
  }, [])

  const handleLogin = (username) => {
    window.localStorage.setItem('isLoggedIn', true)
    window.localStorage.setItem('username', username)
    store.dispatch({ type: 'LOG_IN' })
    store.dispatch({ type: 'SET_USERNAME', username: username })
    store.dispatch({ type: 'RESET_PAGINATION' })
    history.push('/listing')
  }

  const handleLogout = () => {
    window.localStorage.setItem('isLoggedIn', false)
    window.localStorage.setItem('username', '')
    store.dispatch({ type: 'LOG_OUT' })
    store.dispatch({ type: 'SET_USERNAME', username: '' })
    history.push('/')
  }

  return (
    <div>
      <header>
        <AppBanner />
        <NavigationPanel LogoutHandler={handleLogout} />
      </header>
      <Switch>
        <Route path="/listing/" component={ListingPage} />
        <Route path="/">
          <LoginPage LoginHandler={handleLogin} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
