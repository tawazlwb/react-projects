import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppPorvider } from './context'

ReactDOM.render(
  <React.StrictMode>
    <AppPorvider>
      <App />
    </AppPorvider>
  </React.StrictMode>,
  document.getElementById('root')
)
