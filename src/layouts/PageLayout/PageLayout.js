import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div>

    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
        </Navbar.Brand>
      </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/login">Login</NavItem>
          <NavItem eventKey={2} href="/registration">Register</NavItem>
          <NavItem eventKey={3} onClick={console.log(22)} href="/">Logout</NavItem>
        </Nav>
    </Navbar>

    <div className='page-layout__viewport'>
      {children}
    </div>

  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout


{/*<Link to='/login' activeClassName='page-layout__nav-item--active'>Login</Link>*/ }

    {/*<h1>Rentify</h1>

    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>

    {' · '}

    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>

    {' · '}

    <Link to='/registration' activeClassName='page-layout__nav-item--active'>Registration</Link>*/}

