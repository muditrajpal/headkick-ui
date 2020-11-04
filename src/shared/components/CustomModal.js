import React from "react";
import styled from "styled-components";
import {Modal} from "semantic-ui-react";

const ModalContainer = styled(Modal)`
  :first-child {
    width: 90%;
    border-radius: 10px;
  }
`;

const CustomModal = (props) => (
  <ModalContainer open={props.isOpen}>
    {props.children}
  </ModalContainer>
);

export default CustomModal;
