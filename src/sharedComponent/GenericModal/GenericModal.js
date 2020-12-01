import React, { useEffect, useState } from 'react';

import { Modal, Button, Header, Icon } from 'semantic-ui-react';

const GenericModal = ({modalContent}) => {
    const [modalVisibility, setModalVisibility] = useState(false)

    useEffect(() => {
        setModalVisibility(true)}
        , [setModalVisibility]) 

    return (
        <Modal
        onClose={() => setModalVisibility(false)}
        onOpen={() => setModalVisibility(true)}
        open={modalVisibility}
        className="loginModal"
      >
        <Modal.Header className="loginModalHeader">
          { modalContent.title && <h2 className="loginModalHeaderTitle" >Welcome to Headkick!</h2>}
          <Header
            as="h6"
            className="loginModalHeaderSubtitle no-border">
            {modalContent.subTitle && modalContent.subTitle}
          </Header>
        </Modal.Header>
        <Modal.Content className="loginModalContent">
            <p> {modalContent.mainMessage} </p>
            <p> {modalContent.subMessage} </p>
        </Modal.Content>
        <Button className="loginModalCloseBtn" onClick={() => setModalVisibility(false)}>
          <Icon name="close" />
        </Button>
        <div className="loginModalSignupText">
          <span>Don't have an account yet?</span> <span className="loginModalSignupLink text-underline">Sign up now</span>
        </div>
      </Modal>
    )
}

export default GenericModal
