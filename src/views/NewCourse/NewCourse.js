import React from "react";
import styled from "styled-components";
import CustomModal from "shared/components/CustomModal";
import Step1 from "./Step1";
import Step2 from "./Step2";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
`;

const NewCourse = (props) => (
  <CustomModal
    isOpen={true}
    width="65%"
    children={
      <Container>
        {props.state?.step === 1 && <Step1 {...props} />}
        {props.state?.step === 2 && <Step2 {...props} />}
      </Container>
    }
  />
);

export default NewCourse;
