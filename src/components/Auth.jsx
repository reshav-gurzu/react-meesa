import React from 'react';
// import "../components/Auth.css";
import Navbar from './Navbar';
import Signupimg from '../images/signupbg.png';
import facebook from '../images/facebook.png';
import google from '../images/google.png';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

const AuthWrapper = styled.div`
  display:flex;
`;
const Button = styled.button`
  background: #4290F7;
  border: 2px solid #4290F7;
  box-sizing: border-box;
  border-radius: 12px;
  color:white;
`;
const LeftScreen = styled.aside`
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
`;

const LeftContent =  styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 31px 0px 31px 121px;
    height: 100%;
`;


const RightScreen = styled.aside`
  flex-basis: 50%;
  background: #FFDCE1;
  min-height: 100vh;
  padding: 31px 57px 31px 57px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LeftTxtWrapper = styled.div`
  flex-shrink:0;
`;
const LeftScreenTxt = styled.h6`
  font-weight: 700;
  font-size: 30px;
  color:${props=>props.Color || "#5A5A5A"};
`;

const Auth = (props) => {
  return (
    <>
      <AuthWrapper>
        <LeftScreen>
          <LeftContent>
            <LeftTxtWrapper>
              <LeftScreenTxt>You do what matters</LeftScreenTxt>
              <LeftScreenTxt Color="#ED73B2">let us handle the rest</LeftScreenTxt>
            </LeftTxtWrapper>
            <div className="a-l--img">
              <div className="img-box">
                <img src={Signupimg} alt="signupbg" className="img-fluid" />
                {/* <%=image_tag("signupbg.png",className:"img-fluid")%> */}
              </div>
            </div>
          </LeftContent>
        </LeftScreen>
        <RightScreen>
          <div className="a-r--header">
            <h6 className="text-capitalize">{props.title}</h6>
          </div>
          <div className="a-r--__content">
            <div className="a-r--__input">
              <form>
                <div className="input-right">
                  <div className="input-icon js_password_toggle_container">
                    <div className="input__left--icon">
                      {/* <i className="fa fa-lock"></i> */}
                      <input type="email" id="email" name="email" />
                    </div>
                    <div className="input__right--icon">
                      {/* <i className="fa fa-eye js_password_toggle_btn"></i> */}
                      <input type="password" id="email" name="email" />
                    </div>
                  </div>
                  <div id="password_error"></div>
                </div>
                <div className="input-right">
                  <div className="input-icon js_password_toggle_container">
                    <div className="input__left--icon">
                      {/* <i className="fa fa-lock"></i> */}
                    </div>
                    <div className="input__right--icon">
                      {/* <i className="fa fa-eye js_password_toggle_btn"></i> */}
                    </div>
                  </div>
                  <div id="password_confirmation_error" className="input_error"></div>
                </div>
                <div class="form-group">
                  <input type="checkbox" />
                  <label for="spree_user_remember_me">Remember me</label>
                </div>
                <div class="a-r--aggre a-r-login">
                  <p>Forgot password? <a href="/password/recover">click here.</a></p>
                </div>
                <div class="a-r--order">
                  <Button>Log In</Button>
                </div>
                <div className="a-r--order">
                  <button className="btn primary-btn w-100 text-uppercase" >Update Password</button>
                </div>
                <div class="a-r--condition">
                  <p>Or continue with social profile</p>
                </div>
                <div class="a-r--icons">
                  {/* <NavLink class="icons" to="#"> */}
                  <img src={google} />
                  {/* </NavLink> */}
                  {/* <NavLink class="f-icons" to="#"> */}
                  <img src={facebook} />
                  {/* </NavLink> */}
                </div>
              </form>
            </div>
          </div>
          <div class="a-r--footer">
            {/* <p>New Member?<NavLink to={props.visit}>{props.pageName}</NavLink></p> */}
            {/* <p>Or <NavLink to="#">Resend Confirmation?</NavLink></p> */}
          </div>
        </RightScreen>
      </AuthWrapper>
    </>
  );
};
export default Auth;
