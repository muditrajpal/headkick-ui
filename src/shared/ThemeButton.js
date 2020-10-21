import React from "react";
import styled, {css} from "styled-components";

const ButtonContainer = styled.button`
  width: 108px;
  height: 40px;
  background-color: #0d1757;
  border-radius: 6px;
  border: none;
  outline: none;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  ${(props) =>
    props.isDisabled
      ? css`
          cursor: not-allowed;
          background-color: gray !important;
        `
      : css`
          cursor: pointer;
        `}
`;

const ThemeButton = (props) => (
  <ButtonContainer
    disable={props.isDisabled}
    isDisabled={props.isDisabled}
    onClick={props.onClickAction}
  >
    {props.children}
  </ButtonContainer>
);

export default ThemeButton;
