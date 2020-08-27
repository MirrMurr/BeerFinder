import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Header } from 'components/layout/Header/Header'
import { LoginForm } from 'components/views/LoginForm/LoginForm'
import { Listing } from 'components/views/Listing/Listing'

import { useLogin } from 'hooks/useLogin'

import 'styles.scss'

const App = () => {
  const { handleLogin } = useLogin()

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/listing/" component={Listing} />
        <Route path="/">
          <LoginForm LoginHandler={handleLogin} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
