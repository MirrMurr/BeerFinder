import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from 'App'
import store from 'Stores/appStore'

import './Stylesheets/index.css'

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
