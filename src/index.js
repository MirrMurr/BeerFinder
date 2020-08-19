import React from 'react'
import ReactDOM from 'react-dom'
import './Stylesheets/index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './Stores/appStore'

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
