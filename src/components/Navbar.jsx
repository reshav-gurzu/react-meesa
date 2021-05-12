import React from 'react';
import { Link as BaseLink } from 'react-router-dom';
import logo from '../images/Meesa.png';
import styled from 'styled-components';


  const NavItems = styled.li`
    font-size: 14px;
    text-decoration: none;
    font-weight: ${props=>props.fontWeight || "700"};
    color: #ED73B2;
    text-transform: capitalize;
  `;
  // NavItems.defaultProps={
  //   fontWeight:"700"
  // }
  // const Link = styled.a`
  // text-decoration:none;
  // `;
  const NavbarNav = styled.div`
    display:flex;
    gap:36px;
    margin:auto;
  `;
  const AuthNav = styled.ul`
    list-style:none;
    padding-left: 0px;
    display: flex;
    align-items: center;
    gap: 36px;
    margin-bottom: 0px;
  `;

  const LoginButton = styled.button`
    padding: 12px 32px;
    color: white;
    background: #EA3A91;
    border-radius: 8px;
    border: none;
    margin-left: 16px;
  `;

  const Link = styled(BaseLink)`
    &:hover{
      text-decoration:none;
    }
  `;

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavbarNav className="navbar-nav">
              <Link to=''>
                <NavItems>
                  Shop
              </NavItems>
              </Link>
              <Link to=''>
                <NavItems>
                  Subscription
              </NavItems>
              </Link>
              <Link to=''>
                <NavItems>
                  About us
              </NavItems>
              </Link>
            </NavbarNav>

          </div>

          <div class="Authmenu">
            <AuthNav class="navbar navbar-right">
              <Link to='/Login'>
                <NavItems fontWeight="400">
                  Log In
              </NavItems>
              </Link>
              <LoginButton>
                Sign up
              </LoginButton>
              {/* <a class="btn btn-primary" href="/signup">Sign Up</a> */}
            </AuthNav>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

