
import React from 'react'
import ReactDOM from 'react-dom'
import data from './data'
import App from './App'

ReactDOM.render(<App {...data} />, document.querySelector('#app'))

