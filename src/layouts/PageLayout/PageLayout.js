import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div>
    {/*<h1>Rentify</h1>

    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>

    {' · '}

    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>

    {' · '}

    <Link to='/registration' activeClassName='page-layout__nav-item--active'>Registration</Link>*/}


    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          {/*<a href="#">React-Bootstrap</a>*/}
          <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>

        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          {/*<NavItem eventKey={1} href="#">Home</NavItem>*/}
        </Nav>
        <Nav pullRight>
          <NavItem><Link to='/login' activeClassName='page-layout__nav-item--active'>Login</Link></NavItem>
          <NavItem><Link to='/registration' activeClassName='page-layout__nav-item--active'>Register</Link></NavItem>
          <NavItem><Link to='/logout' activeClassName='page-layout__nav-item--active'>Logout</Link></NavItem>

        </Nav>
      </Navbar.Collapse>
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
