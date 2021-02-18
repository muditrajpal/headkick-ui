import axios from 'axios';
import * as axiosUtils from "utils/axiosUtils"
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
import { API_URLS } from "constants/api";


function SignUpFormModal({signUpFormModalVisibility, handleSignUpClose,setSignUpFormModalVisibility, profileType, setProfileType,handleSignInClick}) {
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
      e.preventDefault();
      // payload for login API // better to use external libs like formik or https://react-hook-form.com/ for validation and form submit handling
      const signupPayload = {...userDetails, profileType};
      let response = await axios.post(API_URLS.SIGN_UP, signupPayload)
      // reset the form
      console.log('response', response)
      console.log('response.status', response.status)
      if(response.status === 200) {
        console.log('sign up success!!!!')
        setSignUpSuccess(true)
        console.log('signUpSuccess', signUpSuccess)
      } else {
        console.log('signup failure')
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
    "subMessage": "Personalise your account.",
    "buttonName": "Create team",
    "linkName": "Sign in now",
    "linkSource": "https://localhost:3000/" 
  }

  const failureModalContect = {
    "mainMessage": "Something went wrong!",
    "subMessage": "Please try and sign up again or contact us",
    "buttonName": "Sign up",
    "linkName": "Sign in now",
    "linkSource": "https://localhost:3000/" 
  }


  const signUpFormModalClose = () => {
    setProfileType("")
    handleSignUpClose()
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
        <span>Already have an account?</span> <span className="signUpFormModalSignupLink text-underline"  onClick={()=>handleSignInClick()}>Sign in now!</span>
      </div>
    </Modal>
      {signUpSuccess && (<GeneralModal modalContent={successModalContect} onClick={()=>{
        setSignUpSuccess(false);
        handleSignInClick()
}} /> )}
      {signUpFailure && <GeneralModal modalContent={failureModalContect} onClick={()=>{
                setSignUpFailure(false);
        handleSignInClick()
}} /> }
    </>

  )
}

export default SignUpFormModal;
