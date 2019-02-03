import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'

import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

import './index.css'

import { Creators } from './../../../store/actions'

class Menu extends React.Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleLogout = () => {
    this.props.logout()
  }

  render() {
    return (
      <div>
        <Navbar light expand="md" className='main-menu'>
          <Container>
            <NavbarBrand href="/" >ADMIN</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to='/admin' className='nav-link'>Dashboard</Link>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleLogout}>
                    <FontAwesomeIcon icon={faTimes} />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.login.isLogged
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(Creators.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)