import React from "react";
import styled from "styled-components";
import {Input, Dropdown, Icon} from "semantic-ui-react";
import ThemeButton from "shared/components/ThemeButton";
import history from "historyObj";
import ReactQuill from "react-quill";

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
  justify-content: flex-end;
  gap: 16px;
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

const ContentContainer = styled(Row)`
  flex: 1;
  width: 100%;
  justify-content: space-between;
`;

const DragContainer = styled(Row)`
  gap: 24px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: #1f94ff;
  div {
    cursor: pointer;
  }
  i {
    color: #c4c4c4;
    cursor: grab;
  }
`;

const TextAreaBox = styled(ReactQuill)`
  resize: none;
  height: 94px;
  width: 100%;
  .ql-toolbar.ql-snow {
    border-radius: 4px 4px 0 0;
  }
  .ql-container.ql-snow {
    border-radius: 0 0 4px 4px;
  }
  border-radius: 6px;
`;

const ContentTypeOptions = [
  {key: "Video", value: "Video", text: "Video"},
  {key: "Text", value: "Text", text: "Text"},
];

const AddContentBar = (props) => (
  <InputContainer>
    <ContentContainer>
      <ThemeButton
        customCss={{
          width: 145,
          background: "#FFFFFF",
          color: "#0D1757",
          border: "1px solid #0D1757",
        }}
        isDisabled={false}
        children={
          <>
            + Add Content
            <Dropdown
              floating
              options={ContentTypeOptions}
              trigger={<></>}
              onChange={(e, data) =>
                props.handleContentChange(props.index, "type", data?.value)
              }
            />
          </>
        }
      />
      <DragContainer>
        <Column onClick={() => props.removeContent(props.index)}>
          - Remove Content
        </Column>
        <Icon
          name="bars"
          size="large"
          onDrag={() => alert("Under Development")}
        />
      </DragContainer>
    </ContentContainer>
  </InputContainer>
);

const VideoContent = (props) => (
  <>
    <AddContentBar {...props} />
    <InputContainer>
      <InputLabel>Title</InputLabel>
      <InputBox
        value={props.data?.title}
        onChange={(event) =>
          props.handleContentChange(props.index, "title", event.target.value)
        }
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
  </>
);

const TextContent = (props) => (
  <>
    <AddContentBar {...props} />
    <InputContainer>
      <InputLabel>Title</InputLabel>
      <InputBox
        value={props.data?.title}
        onChange={(event) =>
          props.handleContentChange(props.index, "title", event.target.value)
        }
      />
    </InputContainer>
    <InputContainer>
      <InputLabel>Write your text</InputLabel>
      <TextAreaBox
        value={props.data?.description}
        onChange={(event) =>
          props.handleContentChange(props.index, "description", event)
        }
      />
    </InputContainer>
  </>
);

const Step2 = (props) => {
  const {
    state: {content},
    addContent,
    removeContent,
    handleContentChange,
    toggleStep,
  } = props;
  return (
    <>
      <Header>Step 2/2: Add Course Content</Header>
      <Divider />

      {content?.length
        ? content.map((data, index) => {
            const contentTypeProps = {
              data,
              index,
              handleContentChange,
              removeContent,
            };
            switch (data?.type) {
              case "Video":
                return (
                  <>
                    <VideoContent {...contentTypeProps} />
                    <Divider />
                  </>
                );
              case "Text":
                return (
                  <>
                    <TextContent {...contentTypeProps} />
                    <Divider />
                  </>
                );
              default:
                return null;
            }
          })
        : null}

      <ThemeButton
        customCss={{
          width: 145,
          padding: 12,
          background: "#FFFFFF",
          color: "#0D1757",
          border: "1px solid #0D1757",
        }}
        isDisabled={false}
        children={
          <>
            + Add Content
            <Dropdown
              floating
              options={ContentTypeOptions}
              trigger={<></>}
              onChange={(e, data) => addContent(data?.value)}
            />
          </>
        }
      />
      <Divider />
      <ButtonContainer>
        <ThemeButton
          customCss={{
            width: 145,
            background: "#FFFFFF",
            color: "#0D1757",
            border: "1px solid #0D1757",
          }}
          isDisabled={false}
          onClickAction={() => props.toggleStep(1)}
          children="Previous"
        />
        <ThemeButton
          customCss={{width: 145}}
          isDisabled={false}
          onClickAction={() => history.push("/online-coaching/edit-tutorial")}
          children="Preview"
        />
      </ButtonContainer>
    </>
  );
};

export default Step2;
