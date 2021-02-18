import React, { useEffect, useState } from 'react';

import { Modal, Button, Header, Icon } from 'semantic-ui-react';

const GenericModal = ({modalContent,onClick=()=>{}}) => {
    const [modalVisibility, setModalVisibility] = useState(true)

    
    return (
        <Modal
        onClose={() => setModalVisibility(false)}
        onOpen={() => setModalVisibility(true)}
        open={modalVisibility}
        className="loginModal"
      >
        <Modal.Header className="loginModalHeader" style={{borderBottom:"unset"}}>
          { modalContent.title && <h2 className="loginModalHeaderTitle" >Welcome to Headkick!</h2>}
          <Header
            as="h6"
            className="loginModalHeaderSubtitle no-border">
            {modalContent.subTitle && modalContent.subTitle}
          </Header>
        </Modal.Header>
        <Modal.Content className="loginModalContent">
            <h2> {modalContent.mainMessage} </h2>
            <p> {modalContent.subMessage} </p>
        </Modal.Content>
        <Button className="loginModalCloseBtn" onClick={() => setModalVisibility(false)}>
          <Icon name="close" />
        </Button>
        <div className="loginModalSignupText">
        <Button className="signUpFormModalLoginButton" fluid onClick={onClick}>
           {modalContent.linkName}
          </Button>
        </div>
      </Modal>
    )
}

export default GenericModal
