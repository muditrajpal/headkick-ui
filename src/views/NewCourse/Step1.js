import React from "react";
import styled from "styled-components";
import {Input, Select} from "semantic-ui-react";
import ThemeButton from "shared/components/ThemeButton";

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

const CustomSelect = styled(Select)`
  .item {
    font-family: Lato !important;
    font-weight: 500 !important;
    font-size: 14px !important;
    line-height: 17px !important;
    color: #4d4d4d !important;
  }
`;

const Divider = styled(Row)`
  flex: 1;
  border-bottom: 1px solid #e6e6e6;
  margin: 24px 0;
`;

const ButtonContainer = styled(Row)`
  flex: 1;
  justify-content: flex-end;
`;

const UploadLogoContainer = styled(Row)`
    gap: 14px;
`;

const UploadLogoGrid = styled(Column)`
  width: 100%;
  max-width: 272px;
  border: 1px dashed #dededf;
  border-radius: 6px;
  padding: 10px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #cccccc;
`;

const DescriptionOptions = [
  {key: "Attacking", value: "Attacking", text: "Attacking"},
  {key: "Defending", value: "Defending", text: "Defending"},
  {key: "Sprint", value: "Sprint", text: "Sprint"},
];

const Step1 = (props) => (
  <>
    <Header>Step 1/2: Enter Course Details</Header>
    <SubHeading>Details</SubHeading>
    <Divider />
    <InputContainer>
      <InputLabel>Course Title</InputLabel>
      <InputBox placeholder="Enter course title" />
    </InputContainer>
    <InputContainer>
      <InputLabel>Course Description</InputLabel>
      <CustomSelect
        placeholder="Enter course description"
        options={DescriptionOptions}
      />
    </InputContainer>
    <InputContainer>
      <InputLabel>Upload Logo</InputLabel>
      <UploadLogoContainer>
        <UploadLogoGrid>Course Preview Image/Video</UploadLogoGrid>
        <ThemeButton
          customCss={{
            width: 144,
            background: "#FFFFFF",
            color: "#0D1757",
            border: "1px solid #0D1757",
          }}
          isDisabled={false}
          onClickAction={() => alert("Under Development")}
          children="Choose File"
        />
      </UploadLogoContainer>
    </InputContainer>
    <Divider />
    <ButtonContainer>
      <ThemeButton
        customCss={{width: 172}}
        isDisabled={false}
        onClickAction={() => props.toggleStep(2)}
        children="Next"
      />
    </ButtonContainer>
  </>
);

export default Step1;
