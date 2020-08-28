import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Header } from 'components/layout/Header/Header'
import { LoginForm } from 'components/routes/LoginForm/LoginForm'
import { Listing } from 'components/routes/Listing/Listing'

import 'styles.scss'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/listing/" component={Listing} />
        <Route path="/" component={LoginForm} />
      </Switch>
    </div>
  )
}

export default App
