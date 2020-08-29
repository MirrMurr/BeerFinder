import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from 'components/common/PrivateRoute/PrivateRoute'
import { useSelector } from 'react-redux'

import { Header } from 'components/layout/Header/Header'
import { LoginForm } from 'components/routes/LoginForm/LoginForm'
import { Listing } from 'components/routes/Listing/Listing'

import 'styles.scss'

const App = () => {
  const isValid = useSelector(state => state.login.isValid)

  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute path="/listing/" component={Listing} guardCondition={isValid} fallbackPath="/" />
        <Route path="/" component={LoginForm} />
      </Switch>
    </Router>
  )
}

export default App
