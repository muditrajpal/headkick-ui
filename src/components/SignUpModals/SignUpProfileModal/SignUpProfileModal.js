import React from 'react';
import {
  Button,
  Header,
  Modal,
  Grid,
  Segment,
  Icon,
} from 'semantic-ui-react';

import './SignUpProfileModal.scss';

const SignUpProfileModal = ({handleSignUpClose,signUpProfileModalVisibility, setSignUpProfileModalVisibility, setProfileType,handleSignInClick}) => {

  const handleProfileSelection = (type) => {
    setSignUpProfileModalVisibility(false);
    setProfileType(type)
  }

  const signUpProfileModalClose = () => {
    setProfileType("")
    handleSignUpClose()
  }

  return (
    <Modal
      onClose={signUpProfileModalClose}
      onOpen={() => setSignUpProfileModalVisibility(true)}
      open={signUpProfileModalVisibility}
      className="SignUpProfileModal"
    >
      <Modal.Header className="SignUpProfileModalHeader">
        <h2 className="SignUpProfileModalHeaderTitle" >Join Headkick!</h2>
        <Header
          as="h6"
          className="SignUpProfileModalHeaderSubtitle no-border">
          To begin with, tell us who you are.
        </Header>
      </Modal.Header>
      <Modal.Content className="SignUpProfileModalContent">
      <Segment  className="SignUpProfileModalContainer" vertical>
    
          <Grid className="SignUpProfileModal__choice"  stackable columns={3}>
            <Grid.Column id="SignUpProfileModal__optionOne" onClick={() => handleProfileSelection('coach')}>
              <h2 className="SignUpProfileModal__optionOne__title">Coach</h2>
            </Grid.Column>
            <Grid.Column id="SignUpProfileModal__optionTwo" onClick={() => handleProfileSelection('player')}>
              <h2 className="SignUpProfileModal__optionOne__title">Player</h2>
            </Grid.Column>
            <Grid.Column id="SignUpProfileModal__optionThree" onClick={() => handleProfileSelection('academy_owner')}>
              <h2 className="SignUpProfileModal__optionOne__title">Owner</h2>
            </Grid.Column>
          </Grid>
        </Segment>
 
      </Modal.Content>
      <Button className="SignUpProfileModalCloseBtn" onClick={signUpProfileModalClose}>
        <Icon name="close" />
      </Button>
      <div className="SignUpProfileModalSignupText">
        <span>Already have an account?</span> <span className="SignUpProfileModalSignupLink text-underline"  onClick={()=>handleSignInClick()}>Sign in now</span>
      </div>
    </Modal>
  )
}

export default SignUpProfileModal;
