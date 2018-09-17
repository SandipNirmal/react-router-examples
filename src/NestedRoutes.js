import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './App.css'

const Home = (props) => {
  console.log(props)
  return <h2>Home</h2>
}

const About = (props) => {
  console.log(props)
  return <h2>About </h2>
}

const Contact = (props) => {
  console.log(props)

  return (
    <div>
      <h2> Contact: </h2>
      <Link to={`${props.match.url}/twitter`}>Twitter</Link>
      <Link to={`${props.match.url}/github`}>github</Link>
      <Link to={`${props.match.url}/stackOverflow`}>Stack Overflow</Link>
  
      <Route path={`${props.match.url}/twitter`} render={(props) => {
        console.log(props)
        return <h3>Twitter</h3>
      }} />

      <Route path={`${props.match.url}/github`} render={() => <h3>Github</h3>} />
      <Route path={`${props.match.url}/stackOverflow`} render={() => <h3>Stack Overflow</h3>} />
  
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </Router>
  )
}

export default App
