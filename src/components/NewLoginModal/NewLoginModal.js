import React, { useState } from 'react';

import {
  Button,
  Header,
  Modal,
  Form,
  Checkbox,
  Divider,
  Icon,
} from 'semantic-ui-react';

import { loginUser, useAuthState, useAuthDispatch  } from './../../contexts/auth.context';
import history from "historyObj";
import showHideBlockUI from './../showHideBlockUI'

function NewLoginModal({loginModalVisibility, setLoginModalVisibility}) {
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({ email: "", password: "" })
  const { email, password } = userDetails;
  const dispatch = useAuthDispatch();
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // payload for login API // better to use external libs like formik or https://react-hook-form.com/ for validation and form submit handling
    const payload = {
      email,
      password
    }
    try {
      showHideBlockUI()
      // loginUser action makes the request and handles all the neccessary state changes
      let user = await loginUser(dispatch, payload) 
      if (!user) return
      //navigate to tournament on success
      history.push('/tournament');
      setUserDetails({ email: "", password: "" }) // reset form
      setLoginModalVisibility(false)
    } catch (err) {
      console.log('err', err)
    }
  }

  const handleChange = event => {
    const {name, value} = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  }


  return (
    <Modal
      onClose={() => setLoginModalVisibility(false)}
      onOpen={() => setLoginModalVisibility(true)}
      open={loginModalVisibility}
      className="loginModal"
    >
      <Modal.Header className="loginModalHeader">
        <h2 className="loginModalHeaderTitle" >Welcome to Headkick!</h2>
        <Header
          as="h6"
          className="loginModalHeaderSubtitle no-border">
          Please login to continue
        </Header>
      </Modal.Header>
      <Modal.Content className="loginModalContent">
        <Form onSubmit={handleFormSubmit}>
          <Form.Field>
            <label className="loginModalEmailLabel">E-mail</label>
            <input name="email" onChange={handleChange} value={email} placeholder="joe@schmoe.com" type="email" />
          </Form.Field>
          <Form.Field>
            <label className="loginModalPasswordLabel">Password</label>
            <input
              name="password"
              onChange={handleChange} value={password}
              placeholder="Enter 8 characters or more"
              type={showPassword ? 'text' : 'password'}
              style={{ position: 'relative' }}
            />
            <Icon
              name={showPassword ? 'eye' : 'eye slash outline'}
              className="loginModalPasswordVisibilityIcon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </Form.Field>
          <Form.Field className="loginModalForgotPasswordCheckbox">
            <Checkbox label="Save Password" />
            <span>Forgot password?</span>
          </Form.Field>
          <Button className="loginModalLoginButton" fluid type="submit">
            Login
          </Button>
        </Form>
        <Divider horizontal>
          <Header as="h4" className="loginModalLoginButtonDivider text-grey">
            Or login with
          </Header>
        </Divider>
        <div className="loginModalOauth">
          <Button
            color="google plus"
            className="loginModalOauthItems background-none">
            <Icon name="google" /> Google
          </Button>
          <Button
            color="facebook"
            className="loginModalOauthItems background-none">
            <Icon name="facebook" /> Facebook
          </Button>
        </div>
      </Modal.Content>
      <Button className="loginModalCloseBtn" onClick={() => setLoginModalVisibility(false)}>
        <Icon name="close" />
      </Button>
      <div className="loginModalSignupText">
        <span>Don't have an account yet?</span> <span className="loginModalSignupLink text-underline">Sign up now</span>
      </div>
    </Modal>
  )
}

export default NewLoginModal;
