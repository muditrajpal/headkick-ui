import React from "react";
import styled from "styled-components";
import {Icon, Input} from "semantic-ui-react";
import CustomModal from "shared/components/CustomModal";
import ThemeButton from "shared/components/ThemeButton";
import history from "historyObj";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px;
`;

const HeaderContainer = styled(Row)`
  justify-content: space-between;
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #12216d;
`;

const CloseIcon = styled(Icon)`
  color: #8fc9ff;
  cursor: pointer;
`;

const HorizontalDivider = styled(Row)`
  margin: 21px 0;
  border: 1px solid #e6e6e6;
`;

const SubHeading = styled(Row)`
  flex: 1;
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.2px;
  color: #12216d;
  padding-top: 34px;
`;

const InputContainer = styled(Column)`
  margin: 12px 0;
`;

const InputLabel = styled(Row)`
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
  color: #333333;
  padding-bottom: 7.5px;
`;

const InputBox = styled(Input)`
  width: 100%;
`;

const TextAreaBox = styled.textarea`
  resize: none;
  height: 154px;
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  padding: 10px;
  outline: none;
`;

const ButtonContainer = styled(Row)`
  flex: 1;
  justify-content: center;
  padding-top: 46px;
`;

const EditTitleAndDetail = (props) => (
  <CustomModal
    isOpen={true}
    width="55%"
    children={
      <Container>
        <HeaderContainer>
          Edit Title and Detail of course
          <CloseIcon
            name="window close"
            onClick={() => props.onCloseAction(props.modalName)}
          />
        </HeaderContainer>
        <HorizontalDivider />

        <InputContainer>
          <InputLabel>Course title</InputLabel>
          <InputBox />
        </InputContainer>

        <InputContainer>
          <InputLabel>Course overview</InputLabel>
          <TextAreaBox />
        </InputContainer>

        <ButtonContainer>
          <ThemeButton
            customCss={{width: 96}}
            isDisabled={false}
            onClickAction={() => history.push("/online-coaching")}
            children="Save"
          />
        </ButtonContainer>
      </Container>
    }
  />
);

export default EditTitleAndDetail;
