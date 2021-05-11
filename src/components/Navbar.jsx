import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Meesa.png';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <Link to=''>
              <li className="nav-item">
                Shop
              </li>
              </Link>
              <Link to=''>
              <li className="nav-item">
              Subscription
              </li>
              </Link>
              <Link to=''>
              <li className="nav-item">
                About us
              </li>
              </Link>
            </ul>

          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;

