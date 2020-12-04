import React from "react";
import styled from "styled-components";
import {Icon, Input} from "semantic-ui-react";
import CustomModal from "shared/components/CustomModal";

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
  max-height: 800px;
  overflow-y: auto;
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
  margin: 21px 0 41px 0;
  border: 1px solid #e6e6e6;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 432px;
  border-radius: 10px;
  outline: none;
  background: #000000;
`;

const HighlightTextContainer = styled(Column)`
  padding-top: 34px;
  gap: 11px;
  font-family: Roboto;
  text-align: justify;
  div:first-child {
    font-weight: bold;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: #333333;
  }
  div:nth-child(2) {
    font-size: 14px;
    line-height: 150%;
    color: #c4c4c4;
  }
`;

const Highlight = (props) => (
  <CustomModal
    isOpen={true}
    width="45%"
    children={
      <Container>
        <HeaderContainer>
          Highlights
          <CloseIcon
            name="window close"
            onClick={() => props.onCloseAction(props.modalName)}
          />
        </HeaderContainer>
        <HorizontalDivider />
        <VideoPlayer controls name="media">
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </VideoPlayer>
        <HighlightTextContainer>
          <div>Barcelona Vs Real Madrid (3-1)</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </div>
        </HighlightTextContainer>
      </Container>
    }
  />
);

export default Highlight;
