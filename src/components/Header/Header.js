import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header.css';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <nav>
        <span className='user'>{this.context.user.name}</span>

        <Link onClick={this.handleLogoutClick} to="/login">
          Logout
        </Link>
      </nav>
    );
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to="/login">Login</Link> <Link to="/register">Sign up</Link>
      </nav>
    );
  }

  render() {
    return (
      <header>
        <div className='navbar'>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
          <h1 className='header-logo'>
            <Link to="/">Espace-it</Link>
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
