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
  return <h5>{props.match.params.id.toUpperCase()}</h5>
}

const Contacts = (props) => {
  console.log(props)

  return (
    <div>
      <h2> Contact: </h2>
      <Link to={`${props.match.url}/twitter`}>Twitter</Link>
      <Link to={`${props.match.url}/github`}>github</Link>
      <Link to={`${props.match.url}/stackOverflow`}>Stack Overflow</Link>
  
      <Route path={`${props.match.url}/:id`} component={Contact} />
      <Route exact path={`${props.match.url}`} render={() => <h4>Select Account:</h4>} />

      {/*
         It's possible to use regular expressions to control what param values should be matched.
            * "/order/asc"  - matched
            * "/order/desc" - matched
            * "/order/foo"  - not matched
            * 
        <Route
        path="/order/:direction(asc|desc)"
        component={ComponentWithRegex}
      />
      */}
  
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contacts'>Contact</Link>
      
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contacts' component={Contacts} />
      </div>
    </Router>
  )
}

export default App
