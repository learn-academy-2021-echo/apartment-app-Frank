// import React from "react"
// import PropTypes from "prop-types"
// class App extends React.Component {
//   render () {
//     return (
//       <React.Fragment>
//       </React.Fragment>
//     );
//   }
// }

// export default App

import React, { Component } from 'react'
import {
  BrowserRouter as  Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import AboutUs from './pages/AboutUs'
import LearnMore from './pages/LearnMore'
import Home from './pages/Home'

class App extends Component {
  render() {
    return(
      <Router>
        <h1>Welcome to FJC Properties</h1>
        <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/learn">Learn More</NavLink>
          </NavItem>
        </Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/learn" component={LearnMore} />
        </Switch>
      </Router>
      
// class App extends Component {
//   render() {
//     const {
//       logged_in,
//       current_user,
//       new_user_route,
//       sign_in_route,
//       sign_out_route
//     } = this.props
//     console.log("logged_in:", logged_in)
//     console.log("current_user:", current_user)
//     console.log("new_user_route:", new_user_route)
//     console.log("sign_in_route:", sign_in_route)
//     console.log("sign_out_route:", sign_out_route)
//     return(
//       <>
//       <h1>Hello World</h1>
//       </>
    )
  }
}
export default App