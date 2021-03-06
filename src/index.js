import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './modules/pages/routes'
import {BrowserRouter as Router} from 'react-router-dom'

import TopBar from './modules/components/topBar'

const App = () => {
  return (
    <div>
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
