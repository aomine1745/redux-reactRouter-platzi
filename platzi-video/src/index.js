import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const app = document.getElementById('app')

function render() {
  ReactDOM.render(<App />, app)
}

render()

if(module.hot) {
  module.hot.accept(App, () => {
    render()
  })
}