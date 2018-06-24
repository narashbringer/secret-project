import React, { Component, Fragment } from "react";
import './App.css';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from './Routes.js';

export default class App extends Component {
  constructor(props){
    super(props)
    var isAuthenticateds = localStorage.getItem( 'isAuthenticated' ) || false;
      var user = localStorage.getItem( 'user' ) ||  {};
   
    this.state={
      isAuthenticated: isAuthenticateds,
      baseurl: "https://www.q2i-casa.com/",
      user: user,
    };
   

      
  }
  
    userHasAuthenticated = (authenticated,user) => {

      localStorage.setItem( 'user', user );
      localStorage.setItem( 'isAuthenticated', authenticated );
      this.setState({ isAuthenticated: authenticated,user:user });
    
    
  }

handleLogout = event => {
  this.userHasAuthenticated(false,{});
}
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      Auth:this.Auth,
      user: this.state.user,
      baseurl:this.state.baseurl
    };
    return (
      <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><image href=""></image></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          {this.state.isAuthenticated
  ? <Fragment>
  <LinkContainer to="/messaging">
        <NavItem>Messaging</NavItem>
      </LinkContainer>
      <NavItem onClick={this.handleLogout}>Logout</NavItem>
      </Fragment>
  : <Fragment>
      <LinkContainer to="/signup">
        <NavItem>Signup</NavItem>
      </LinkContainer>
      <LinkContainer to="/login">
        <NavItem>Login</NavItem>
      </LinkContainer>
      
    </Fragment>
}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes  childProps={childProps}/>
    </div>
    );
  }
}


