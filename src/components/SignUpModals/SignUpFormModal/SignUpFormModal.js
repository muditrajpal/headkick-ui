import Axios from 'axios';
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

import './SignUpFormModal.scss';

function SignUpFormModal({signUpFormModalVisibility, setSignUpFormModalVisibility, profileType, setProfileType}) {
  const userDetailsInitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState(userDetailsInitialValues);

  const {firstName, lastName, email, password, } = userDetails;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // payload for login API // better to use external libs like formik or https://react-hook-form.com/ for validation and form submit handling
    console.log('sending user info', {...userDetails, profileType})

    Axios.post('/account/signup', {...userDetails, profileType} ).then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err);
    })
    // reset the form
    setUserDetails(userDetailsInitialValues)
    // close modal and reset user type
    setSignUpFormModalVisibility(false)
    setProfileType("")
  }


  const signUpFormModalClose = () => {
    setProfileType("")
    setSignUpFormModalVisibility(false)
  }
  
  const handleChange = event => {
    const {name, value} = event.target;
    setUserDetails({ ...userDetails, [name]: value });

  }

  return (
    <Modal
      onClose={signUpFormModalClose}
      onOpen={() => setSignUpFormModalVisibility(true)}
      open={signUpFormModalVisibility}
      className="signUpFormModal"
    >
      <Modal.Header className="signUpFormModalHeader">
        <h2 className="signUpFormModalHeaderTitle" >Get started!</h2>
        <Header
          as="h6"
          className="signUpFormModalHeaderSubtitle no-border">
          Fill the details and join headkick.
        </Header>
      </Modal.Header>
      <Modal.Content className="signUpFormModalContent">
        <Form onSubmit={handleFormSubmit}>
          <div className="signUpFormModalName">
          <Form.Field className="signUpFormModalFirstName">
            <label className="signUpFormModalEmailLabel">First Name</label>
            <input onChange={handleChange} name="firstName" value={firstName} placeholder="John" type="text" />
          </Form.Field>
          <Form.Field className="signUpFormModalLastName">
            <label className="signUpFormModalEmailLabel">Last Name</label>
            <input onChange={handleChange} name="lastName" value={lastName} placeholder="Doe" type="text" />
          </Form.Field>
          </div>
          <Form.Field>
            <label className="signUpFormModalEmailLabel">E-mail</label>
            <input  onChange={handleChange} value={email} placeholder="joe@schmoe.com" name="email" type="email" />
          </Form.Field>
          <Form.Field>
            <label className="signUpFormModalPasswordLabel">Password</label>
            <input
              name="password"
              onChange={handleChange} value={password}
              placeholder="Enter 8 characters or more"
              type={showPassword ? 'text' : 'password'}
              style={{ position: 'relative' }}
            />
            <Icon
              name={showPassword ? 'eye' : 'eye slash outline'}
              className="signUpFormModalPasswordVisibilityIcon"
              onClick={() => setShowPassword(!showPassword)}  
            />
          </Form.Field>
          <Form.Field className="signUpFormModalTncCheckbox">
            <Checkbox id="tnc" /> <label className="signUpFormModalTncLabel" htmlFor="tnc"> I agree to <span>terms & conditions.</span> </label>
          </Form.Field>
          <Button className="signUpFormModalLoginButton" fluid type="submit">
            Get Started
          </Button>
        </Form>
        <Divider horizontal className="signUpFormModalButtonDividerContainer" >
          <Header as="h4" className="signUpFormModalButtonDivider text-grey">
            Or Sign up with
          </Header>
        </Divider>
        <div className="signUpFormModalOauth">
          <Button
            color="google plus"
            className="signUpFormModalOauthItems background-none">
            <Icon name="google" /> Google
          </Button>
          <Button
            color="facebook"
            className="signUpFormModalOauthItems background-none">
            <Icon name="facebook" /> Facebook
          </Button>
        </div>
      </Modal.Content>
      <Button className="signUpFormModalCloseBtn" onClick={signUpFormModalClose}>
        <Icon name="close" />
      </Button>
      <div className="signUpFormModalSignupText">
        <span>Already have an account?</span> <span className="signUpFormModalSignupLink text-underline">Sign in now!</span>
      </div>
    </Modal>
  )
}

export default SignUpFormModal;
