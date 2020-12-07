import axios from 'axios';
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

import GeneralModal from './../../../sharedComponent/GenericModal/GenericModal'
import './SignUpFormModal.scss';

const ROOT_URL = 'http://localhost:8080/api';

function SignUpFormModal({signUpFormModalVisibility, setSignUpFormModalVisibility, profileType, setProfileType}) {
  const userDetailsInitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState(userDetailsInitialValues);
  const [signUpSuccess, setSignUpSuccess ] = useState(false);
  const [signUpFailure, setSignUpFailure ] = useState(false);

  const {firstName, lastName, email, password, } = userDetails;

  const handleFormSubmit = async (e) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      };

      e.preventDefault();
      // payload for login API // better to use external libs like formik or https://react-hook-form.com/ for validation and form submit handling
      const signupPayload = {...userDetails, profileType};
      let response = await axios.post(`${ROOT_URL}/auth/signup`, JSON.stringify(signupPayload), requestOptions)
      // reset the form
      if(response.status === 200) {
        setSignUpSuccess(true)
      } else {
        setSignUpFailure(true)
      }
      setUserDetails(userDetailsInitialValues)
      // close modal and reset user type
      setSignUpFormModalVisibility(false)
      setProfileType("")

    } catch (err) {
      console.log(err)
    }
  }

  const successModalContect = {
    "mainMessage": "Account successfully created!",
    "SubMessage": "Personalise your account and enjoy the tournaments.",
    "buttonName": "Create team",
    "linkName": "Sign in now",
    "linkSource": "https://localhost:3000/" 
  }

  const failureModalContect = {
    "mainMessage": "Something went wrong!",
    "SubMessage": "Please try and sign up again or contact us",
    "buttonName": "Sign up",
    "linkName": "Sign in now",
    "linkSource": "https://localhost:3000/" 
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
    <>
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
      {signUpSuccess && <GeneralModal modalContent={successModalContect} /> }
      {signUpFailure && <GeneralModal modalContent={failureModalContect}/> }
    </>

  )
}

export default SignUpFormModal;
