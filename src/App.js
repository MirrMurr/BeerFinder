import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
// import { PrivateRoute } from 'components/common/PrivateRoute/PrivateRoute'
import { GuardProvider, GuardedRoute } from 'react-router-guards'
// import { useSelector } from 'react-redux'

import { Header } from 'components/layout/Header/Header'
import { LoginForm } from 'components/routes/LoginForm/LoginForm'
import { Listing } from 'components/routes/Listing/Listing'
import { requireLogin } from 'services/utils/loginService'

import 'styles.scss'

const App = () => {
  // const isValid = useSelector(state => state.login.isValid)

  return (
    <Router>
      <Header />
      {/* <Switch>
        <PrivateRoute path="/listing/" component={Listing} guardCondition={isValid} fallbackPath="/" />
        <Route path="/" component={LoginForm} />
      </Switch> */}
      <GuardProvider guards={[requireLogin]}>
        <Switch>
          <GuardedRoute path="/listing/" component={Listing} meta={{ auth: true }} />
          <GuardedRoute path="/" component={LoginForm} />
        </Switch>
      </GuardProvider>
    </Router>
  )
}

export default App
