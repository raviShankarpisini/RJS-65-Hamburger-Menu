import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
