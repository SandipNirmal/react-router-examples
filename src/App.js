import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './App.css'

const Home = (props) => {
  console.log(props)
  return <h2>Home</h2>
}

const About = (props) => {
  console.log(props)
  return <h2>About</h2>
}

const Contact = (props) => {
  console.log(props)
  return <h2>Contact</h2>
}

const ContactGithub = (props) => {
  console.log(props)
  return <h4>Github: http://github.com/sandipnirmal</h4>
}

const App = () => {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/contact/github'>Github</Link>
      
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/contact/github' component={ContactGithub} />
      </div>
    </Router>
  )
}

export default App
