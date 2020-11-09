import React from "react";
import styled from "styled-components";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3/Step3";

const NewTrainingBody = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  top: 6rem;
  position: absolute;
  float: left;
  width: 100%;
`;

const NewTrainingContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  margin: 0 auto;
  width: 75%;
  padding: 30px;
`;

const NewTraining = (props) => (
  <NewTrainingBody>
    <NewTrainingContainer>
      {props.step === 1 && <Step1 toggleStep={props.toggleStep} />}
      {props.step === 2 && <Step2 toggleStep={props.toggleStep} />}
      {props.step === 3 && <Step3 toggleStep={props.toggleStep} />}
    </NewTrainingContainer>
  </NewTrainingBody>
);

export default NewTraining;
