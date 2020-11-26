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

const SignUpProfileModal = ({signUpProfileModalVisibility, setSignUpProfileModalVisibility, setProfileType}) => {

  const handleProfileSelection = (type) => {
    setSignUpProfileModalVisibility(false);
    setProfileType(type)
  }

  const signUpProfileModalClose = () => {
    setProfileType("")
    setSignUpProfileModalVisibility(false)
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
    
          <Grid className="SignUpProfileModal__choice">
            <Grid.Column id="SignUpProfileModal__optionOne" width={8} onClick={() => handleProfileSelection('coach')}>
              <h2 className="SignUpProfileModal__optionOne__title">Coach</h2>
            </Grid.Column>
            <Grid.Column id="SignUpProfileModal__optionTwo" width={8} onClick={() => handleProfileSelection('player')}>
              <h2 className="SignUpProfileModal__optionOne__title">Player</h2>
            </Grid.Column>
          </Grid>
        </Segment>
 
      </Modal.Content>
      <Button className="SignUpProfileModalCloseBtn" onClick={signUpProfileModalClose}>
        <Icon name="close" />
      </Button>
      <div className="SignUpProfileModalSignupText">
        <span>Already have an account?</span> <span className="SignUpProfileModalSignupLink text-underline">Sign in now</span>
      </div>
    </Modal>
  )
}

export default SignUpProfileModal;
