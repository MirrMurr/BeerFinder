import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { GuardProvider, GuardedRoute } from 'react-router-guards'

import { Header } from 'components/layout/Header/Header'

import { LoginForm } from 'components/views/auth/LoginForm'

import { Listing } from 'components/routes/Listing/Listing'
import { NotFound } from 'components/routes/NotFound/NotFound'

import { requireLogin } from 'services/utils/loginService'

import 'styles.scss'

const App = () => {
  return (
    <Router>
      <Header />
      <GuardProvider guards={[requireLogin]}>
        <Switch>
          <GuardedRoute path="/listing/" component={Listing} meta={{ auth: true }} />
          <GuardedRoute exact path="/login" component={LoginForm} />
          <GuardedRoute exact path="/">
            <Redirect to="/login" />
          </GuardedRoute>
          <GuardedRoute exact path="/*" component={NotFound} />
        </Switch>
      </GuardProvider>
    </Router>
  )
}

export default App
