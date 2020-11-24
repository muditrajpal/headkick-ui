import React from "react";
import styled from "styled-components";
import {Search, Checkbox, Icon} from "semantic-ui-react";
import ThemeButton from "shared/components/ThemeButton";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(Row)`
  gap: 22px;
`;

const ContentContainer = styled(Column)`
  flex: 3;
  gap: 35px;
`;

const TutorialListContainer = styled(Column)`
  flex: 1;
  gap: 25px;
  border: 1px solid #e9ecfb;
  border-radius: 6px;
  padding: 16px 13px;
`;

const VideoTextContainer = styled(Row)`
  height: 431px;
  overflow-y: auto;
  border-radius: 10px;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  outline: none;
`;

const TutorialHeadingContainer = styled(Row)`
  justify-content: space-between;
  align-items: center;
`;

const TutorialHeading = styled(Column)`
  font-family: Roboto;
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;
  color: #12216d;
`;

const EditHeadindDescriptionIcon = styled(Icon)`
  color: #1f94ff;
  cursor: pointer;
`;

const TutorialText = styled(Row)`
  font-family: Roboto;
  font-size: 20px;
  line-height: 23px;
  color: #787878;
  max-width: 80%;
  text-align: justify;
`;

const HorizontalDivider = styled(Row)`
  margin-top: 87px;
  border: 1px solid #e6e6e6;
`;

const ButtonContainer = styled(Row)`
  justify-content: flex-end;
`;

const ToggleTutorialContainer = styled(Row)`
  justify-content: space-between;
`;

const SelectAllContainer = styled(Row)`
  gap: 10px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: #c8c8c8;
`;

const AddNewContent = styled(Row)`
  justify-content: flex-end;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #0195f8;
  cursor: pointer;
`;

const SearchBox = styled(Search)`
  width: 100%;
  .ui.search {
    width: 100%;
  }
  .ui.input {
    width: 100%;
  }
`;

const IconLightGrey = styled(Icon)`
  cursor: pointer;
  color: #cccccc;
`;

const TutorialContainer = styled(Column)`
  flex: 1;
  margin: 0 -13px;
  max-height: calc(100vh - 300px);
  overflow-y: auto;
`;

const TutorialRowContainer = styled(Row)`
  gap: 16px;
  padding: 18px 13px;
  align-items: center;
  :hover {
    background-color: #e9ecfb;
  }
`;

const TutorialRowTextContainer = styled(Column)`
  gap: 6px;
`;

const TutorialRowHeading = styled(Row)`
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #12216d;
`;

const TutorialRowVideoDiscription = styled(Row)`
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: #c8c8c8;
`;

const VideoEditDeleteContainer = styled(Row)`
  display: none;
  gap: 11px;
  justify-content: flex-end;
  align-items: center;
  color: #c4c4c4;
  ${TutorialRowContainer}:hover & {
    display: flex;
    flex: 1;
  }
`;

const UploadedContent = (props) => (
  <ContentContainer>
    <VideoTextContainer>
      <VideoPlayer controls name="media">
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </VideoPlayer>
    </VideoTextContainer>

    <TutorialHeadingContainer>
      <TutorialHeading>How to Defend 101</TutorialHeading>
      <EditHeadindDescriptionIcon
        name="pencil alternate"
        size="large"
        onClick={() => props.toggleState("isEditTitleAndDetailPopUpOpen")}
      />
    </TutorialHeadingContainer>

    <TutorialText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit.
    </TutorialText>

    <HorizontalDivider />
    <ButtonContainer>
      <ThemeButton customCss={{width: 96}} isDisabled={false} children="Save" />
    </ButtonContainer>
  </ContentContainer>
);

const Tutorials = (props) => (
  <TutorialContainer>
    <TutorialRowContainer>
      <Column>
        <Checkbox />
      </Column>
      <TutorialRowTextContainer>
        <TutorialRowHeading>Introduction to Defense</TutorialRowHeading>
        <TutorialRowVideoDiscription>
          <IconLightGrey name="video play" /> 3 min
        </TutorialRowVideoDiscription>
      </TutorialRowTextContainer>
      <VideoEditDeleteContainer>
        <IconLightGrey name="bars" onClick={() => alert("Under Development")} />
        <IconLightGrey
          name="trash alternate outline"
          onClick={() => alert("Under Development")}
        />
      </VideoEditDeleteContainer>
    </TutorialRowContainer>

    <TutorialRowContainer>
      <Column>
        <Checkbox />
      </Column>
      <TutorialRowTextContainer>
        <TutorialRowHeading>Introduction to Defense</TutorialRowHeading>
        <TutorialRowVideoDiscription>
          <IconLightGrey name="book" /> 10 min read
        </TutorialRowVideoDiscription>
      </TutorialRowTextContainer>
      <VideoEditDeleteContainer>
        <IconLightGrey name="bars" onClick={() => alert("Under Development")} />
        <IconLightGrey
          name="trash alternate outline"
          onClick={() => alert("Under Development")}
        />
      </VideoEditDeleteContainer>
    </TutorialRowContainer>

    <TutorialRowContainer>
      <Column>
        <Checkbox />
      </Column>
      <TutorialRowTextContainer>
        <TutorialRowHeading>Introduction to Defense</TutorialRowHeading>
        <TutorialRowVideoDiscription>
          <IconLightGrey name="video play" /> 3 min
        </TutorialRowVideoDiscription>
      </TutorialRowTextContainer>
      <VideoEditDeleteContainer>
        <IconLightGrey name="bars" onClick={() => alert("Under Development")} />
        <IconLightGrey
          name="trash alternate outline"
          onClick={() => alert("Under Development")}
        />
      </VideoEditDeleteContainer>
    </TutorialRowContainer>

    <TutorialRowContainer>
      <Column>
        <Checkbox />
      </Column>
      <TutorialRowTextContainer>
        <TutorialRowHeading>Introduction to Defense</TutorialRowHeading>
        <TutorialRowVideoDiscription>
          <IconLightGrey name="video play" /> 3 min
        </TutorialRowVideoDiscription>
      </TutorialRowTextContainer>
      <VideoEditDeleteContainer>
        <IconLightGrey name="bars" onClick={() => alert("Under Development")} />
        <IconLightGrey
          name="trash alternate outline"
          onClick={() => alert("Under Development")}
        />
      </VideoEditDeleteContainer>
    </TutorialRowContainer>

    <TutorialRowContainer>
      <Column>
        <Checkbox />
      </Column>
      <TutorialRowTextContainer>
        <TutorialRowHeading>Introduction to Defense</TutorialRowHeading>
        <TutorialRowVideoDiscription>
          <IconLightGrey name="video play" /> 3 min
        </TutorialRowVideoDiscription>
      </TutorialRowTextContainer>
      <VideoEditDeleteContainer>
        <IconLightGrey name="bars" onClick={() => alert("Under Development")} />
        <IconLightGrey
          name="trash alternate outline"
          onClick={() => alert("Under Development")}
        />
      </VideoEditDeleteContainer>
    </TutorialRowContainer>

    <TutorialRowContainer>
      <Column>
        <Checkbox />
      </Column>
      <TutorialRowTextContainer>
        <TutorialRowHeading>Introduction to Defense</TutorialRowHeading>
        <TutorialRowVideoDiscription>
          <IconLightGrey name="video play" /> 3 min
        </TutorialRowVideoDiscription>
      </TutorialRowTextContainer>
      <VideoEditDeleteContainer>
        <IconLightGrey name="bars" onClick={() => alert("Under Development")} />
        <IconLightGrey
          name="trash alternate outline"
          onClick={() => alert("Under Development")}
        />
      </VideoEditDeleteContainer>
    </TutorialRowContainer>

    <TutorialRowContainer>
      <Column>
        <Checkbox />
      </Column>
      <TutorialRowTextContainer>
        <TutorialRowHeading>Introduction to Defense</TutorialRowHeading>
        <TutorialRowVideoDiscription>
          <IconLightGrey name="book" /> 10 min read
        </TutorialRowVideoDiscription>
      </TutorialRowTextContainer>
      <VideoEditDeleteContainer>
        <IconLightGrey name="bars" onClick={() => alert("Under Development")} />
        <IconLightGrey
          name="trash alternate outline"
          onClick={() => alert("Under Development")}
        />
      </VideoEditDeleteContainer>
    </TutorialRowContainer>

    <TutorialRowContainer>
      <Column>
        <Checkbox />
      </Column>
      <TutorialRowTextContainer>
        <TutorialRowHeading>Introduction to Defense</TutorialRowHeading>
        <TutorialRowVideoDiscription>
          <IconLightGrey name="book" /> 10 min read
        </TutorialRowVideoDiscription>
      </TutorialRowTextContainer>
      <VideoEditDeleteContainer>
        <IconLightGrey name="bars" onClick={() => alert("Under Development")} />
        <IconLightGrey
          name="trash alternate outline"
          onClick={() => alert("Under Development")}
        />
      </VideoEditDeleteContainer>
    </TutorialRowContainer>

    <TutorialRowContainer>
      <Column>
        <Checkbox />
      </Column>
      <TutorialRowTextContainer>
        <TutorialRowHeading>Introduction to Defense</TutorialRowHeading>
        <TutorialRowVideoDiscription>
          <IconLightGrey name="book" /> 10 min read
        </TutorialRowVideoDiscription>
      </TutorialRowTextContainer>
      <VideoEditDeleteContainer>
        <IconLightGrey name="bars" onClick={() => alert("Under Development")} />
        <IconLightGrey
          name="trash alternate outline"
          onClick={() => alert("Under Development")}
        />
      </VideoEditDeleteContainer>
    </TutorialRowContainer>

    <TutorialRowContainer>
      <Column>
        <Checkbox />
      </Column>
      <TutorialRowTextContainer>
        <TutorialRowHeading>Introduction to Defense</TutorialRowHeading>
        <TutorialRowVideoDiscription>
          <IconLightGrey name="book" /> 10 min read
        </TutorialRowVideoDiscription>
      </TutorialRowTextContainer>
      <VideoEditDeleteContainer>
        <IconLightGrey name="bars" onClick={() => alert("Under Development")} />
        <IconLightGrey
          name="trash alternate outline"
          onClick={() => alert("Under Development")}
        />
      </VideoEditDeleteContainer>
    </TutorialRowContainer>

    <TutorialRowContainer>
      <Column>
        <Checkbox />
      </Column>
      <TutorialRowTextContainer>
        <TutorialRowHeading>Introduction to Defense</TutorialRowHeading>
        <TutorialRowVideoDiscription>
          <IconLightGrey name="book" /> 10 min read
        </TutorialRowVideoDiscription>
      </TutorialRowTextContainer>
      <VideoEditDeleteContainer>
        <IconLightGrey name="bars" onClick={() => alert("Under Development")} />
        <IconLightGrey
          name="trash alternate outline"
          onClick={() => alert("Under Development")}
        />
      </VideoEditDeleteContainer>
    </TutorialRowContainer>

    <TutorialRowContainer>
      <Column>
        <Checkbox />
      </Column>
      <TutorialRowTextContainer>
        <TutorialRowHeading>Introduction to Defense</TutorialRowHeading>
        <TutorialRowVideoDiscription>
          <IconLightGrey name="book" /> 10 min read
        </TutorialRowVideoDiscription>
      </TutorialRowTextContainer>
      <VideoEditDeleteContainer>
        <IconLightGrey name="bars" onClick={() => alert("Under Development")} />
        <IconLightGrey
          name="trash alternate outline"
          onClick={() => alert("Under Development")}
        />
      </VideoEditDeleteContainer>
    </TutorialRowContainer>
  </TutorialContainer>
);

const TutorialList = (props) => (
  <TutorialListContainer>
    <ToggleTutorialContainer>
      <SelectAllContainer>
        <Checkbox /> Select All
      </SelectAllContainer>

      <IconLightGrey
        name="trash alternate outline"
        onClick={() => alert("Under Development")}
      />

      <AddNewContent onClick={() => props.toggleState("isAddContentPopUpOpen")}>
        + Add new content
      </AddNewContent>
    </ToggleTutorialContainer>

    <SearchBox placeholder="Search..." />

    <Tutorials {...props} />
  </TutorialListContainer>
);

const Tutorial = (props) => (
  <Container>
    <UploadedContent {...props} />
    <TutorialList {...props} />
  </Container>
);

export default Tutorial;
