import React from "react";
import styled from "styled-components";
import {Input} from "semantic-ui-react";
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

const Header = styled(Row)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #12216d;
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

const Divider = styled(Row)`
  flex: 1;
  border-bottom: 1px solid #e6e6e6;
  margin: 24px 0;
`;

const ButtonContainer = styled(Row)`
  flex: 1;
  justify-content: center;
  gap: 33px;
`;

const Step1 = (props) => (
  <>
    <Header>Step 1/3: Training Name</Header>
    <SubHeading>Details</SubHeading>
    <Divider />
    <InputContainer>
      <InputLabel>Training Name</InputLabel>
      <InputBox placeholder="Enter training name" />
    </InputContainer>
    <InputContainer>
      <InputLabel>Start Date</InputLabel>
      <Row style={{gap: 7}}>
        <InputBox style={{width: 55}} placeholder="DD" />
        <InputBox style={{width: 55}} placeholder="MM" />
        <InputBox style={{width: 68}} placeholder="YYYY" />
      </Row>
    </InputContainer>
    <Divider />
    <ButtonContainer>
      <ThemeButton
        customCss={{
          width: 121,
          background: "#FFFFFF",
          color: "#0D1757",
          border: "1px solid #0D1757",
        }}
        isDisabled={false}
        onClickAction={() => history.push("/academies/training")}
        children="Previous"
      />
      <ThemeButton
        customCss={{width: 121}}
        isDisabled={false}
        onClickAction={() => props.toggleStep(2)}
        children="Next"
      />
    </ButtonContainer>
  </>
);

export default Step1;
