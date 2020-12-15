import React, {useState} from "react";
import styled from "styled-components";
import {Icon, Input, Checkbox} from "semantic-ui-react";
import CustomModal from "shared/components/CustomModal";
import ThemeButton from "shared/components/ThemeButton";

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

const UploadVideoButtonInputContainer = styled(Row)`
  flex: 1;
  gap: 13px;
`;

const ButtonContainer = styled(Row)`
  flex: 1;
  justify-content: center;
  padding-top: 46px;
`;

const ContentTypeSelectorContainer = styled(Row)`
  gap: 32px;
`;

const ContentTypeCheckBoxContainer = styled(Row)`
  gap: 10px;
`;

const ContentType = {
  VIDEO: "VIDEO",
  TEXT: "TEXT",
};

const TextContent = (props) => (
  <>
    <InputContainer>
      <InputLabel>Text Tilte</InputLabel>
      <InputBox />
    </InputContainer>

    <InputContainer>
      <InputLabel>Add text</InputLabel>
      <TextAreaBox />
    </InputContainer>
  </>
);

const VideoContent = (props) => (
  <>
    <InputContainer>
      <InputLabel>Video Tilte</InputLabel>
      <InputBox />
    </InputContainer>

    <InputContainer>
      <InputLabel>Upload video</InputLabel>
      <UploadVideoButtonInputContainer>
        <InputBox />
        <ThemeButton
          customCss={{
            width: 138,
            border: "1px solid #0D1757",
            color: "#0D1757",
            backgroundColor: "#FFFFFF",
          }}
          isDisabled={false}
          onClickAction={() => alert("Under Development")}
          children="Choose File"
        />
      </UploadVideoButtonInputContainer>
    </InputContainer>
  </>
);

const AddContent = (props) => {
  const [selectedContentType, selectContentType] = useState(ContentType.VIDEO);
  return (
    <CustomModal
      isOpen={true}
      width="55%"
      children={
        <Container>
          <HeaderContainer>
            Add content
            <CloseIcon
              name="window close"
              onClick={() => props.onCloseAction(props.modalName)}
            />
          </HeaderContainer>
          <HorizontalDivider />

          <InputContainer>
            <InputLabel>Content type</InputLabel>
            <ContentTypeSelectorContainer>
              <ContentTypeCheckBoxContainer>
                <Checkbox
                  checked={selectedContentType === ContentType.VIDEO}
                  onChange={() => selectContentType(ContentType.VIDEO)}
                />
                <InputLabel>Video</InputLabel>
              </ContentTypeCheckBoxContainer>
              <ContentTypeCheckBoxContainer>
                <Checkbox
                  checked={selectedContentType === ContentType.TEXT}
                  onChange={() => selectContentType(ContentType.TEXT)}
                />
                <InputLabel>Text</InputLabel>
              </ContentTypeCheckBoxContainer>
            </ContentTypeSelectorContainer>
          </InputContainer>

          {selectedContentType === ContentType.VIDEO ? (
            <VideoContent {...props} />
          ) : (
            <TextContent {...props} />
          )}

          <ButtonContainer>
            <ThemeButton
              customCss={{width: 96}}
              isDisabled={false}
              onClickAction={() => props.onCloseAction(props.modalName)}
              children="Save"
            />
          </ButtonContainer>
        </Container>
      }
    />
  );
};

export default AddContent;
