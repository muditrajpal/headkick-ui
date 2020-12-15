import React from "react";
import styled from "styled-components";
import {Modal} from "semantic-ui-react";

const ModalContainer = styled(Modal)`
  :first-child {
    width: ${({width}) => width};
    border-radius: 10px;
    border: none !important;
  }
`;

const CustomModal = (props) => (
  <ModalContainer open={props.isOpen} width={props.width || "90%"}>
    {props.children}
  </ModalContainer>
);

export default CustomModal;
