import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import './App.css'

const Home = (props) => {
  console.log(props)
  return <h3>Home</h3>
}

const About = (props) => {
  console.log(props)
  return <h3>About</h3>
}

const Contact = (props) => {
  console.log(props)
  return <h3>Contact</h3>
}

const App = () => {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      
        <h2>Using Switch: </h2>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/' component={Home} />
        </Switch>

        <h2>Using Route: </h2>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </Router>
  )
}

export default App
