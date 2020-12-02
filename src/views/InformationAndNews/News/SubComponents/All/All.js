import React from "react";
import styled from "styled-components";
import {Select, Dropdown, Icon} from "semantic-ui-react";
import PaginationBar from "shared/components/PaginationBar";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const AllContainer = styled(Column)`
  max-height: calc(100vh - 270px);
  overflow-y: auto;
`;

const FilterBarContainer = styled(Row)`
  padding: 30px 0;
  background: #ffffff;
  box-shadow: 0px 4px 14px 2px rgba(233, 236, 251, 0.5);
  border-radius: 6px;
`;

const FilterContainer = styled(Row)`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 21px;
`;

const FiltersContent = styled(Row)`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const FilterByText = styled(Column)`
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: #0d1757;
  padding-right: 51px;
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

const ResetFilter = styled(Row)`
  align-items: center;
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #007ae9;
  cursor: pointer;
  gap: 22px;
`;

const ResetFilterDivider = styled(Column)`
  height: 32px;
  border: 1px solid #9c9c9c;
`;

const HorizontalDivider = styled(Row)`
  border: 1px solid #e8ebfc;
  margin: 30px 0;
`;

const NewsHighlightsContainer = styled(Row)`
  gap: 30px;
`;

const NewsHighlightsLeftContainer = styled(Column)`
  flex: 2;
  gap: 50px;
`;

const NewsHighlightsRightContainer = styled(Column)`
  flex: 1;
  gap: 30px;
`;

const MainHighlightContainer = styled(Column)`
  background: #ffffff;
  box-shadow: 0px 4px 14px 2px rgba(233, 236, 251, 0.5);
  border-radius: 16px;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 400px;
  border-radius: 16px 16px 0 0;
  outline: none;
`;

const MainHighlightTextContainer = styled(Column)`
  padding: 30px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #c4c4c4;
  gap: 10px;
  text-align: justify;
`;

const MainHighlightHeader = styled(Row)`
  flex: 1;
  justify-content: space-between;
`;

const MainHighlightHeaderText = styled(Column)`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: #333333;
`;

const LatestContainer = styled(Column)`
  gap: 60px;
`;

const LatestHeader = styled(Row)`
  justify-content: space-between;
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  color: #0d1757;
`;

const LatestNewsFilter = styled(Row)`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
`;

const LatestNewsContainer = styled(Row)`
  gap: 26px;
  background: #ffffff;
  box-shadow: 0px 4px 14px 2px rgba(233, 236, 251, 0.5);
  border-radius: 16px;
  min-height: 204px;
  width: 100%;
`;

const LatestNewsPhoto = styled.img`
  width: 204px;
  height: 204px;
  border-radius: 16px 0 0 16px;
`;

const LatestNewsTextContainer = styled(Column)`
  justify-content: center;
  gap: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #c4c4c4;
`;

const LatestNewsTopic = styled(Row)`
  letter-spacing: 0.01em;
  font-size: 12px;
  line-height: 25px;
  color: #007ae9;
  gap: 11px;
  div {
    letter-spacing: 0.01em;
    color: rgba(51, 51, 51, 0.5);
  }
`;

const LatestNewsHeading = styled(Column)`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: #333333;
  padding-right: 24px;
  div {
    padding-top: 4px;
    font-weight: normal;
    letter-spacing: 0.01em;
    color: rgba(51, 51, 51, 0.5);
  }
`;

const LatestNewsByContainer = styled(Row)`
  gap: 12px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: #007ae9;
  align-items: center;
`;

const LatestNewsByPhoto = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
`;

const SubInfoListContainer = styled(Column)`
  border: 1px solid #e9ecfb;
  box-sizing: border-box;
  border-radius: 4px;
  gap: 22px;
`;

const SubInfoListHeader = styled(Row)`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #12216d;
  background: #e9ecfb;
  border: 1px solid #e9ecfb;
  box-sizing: border-box;
  height: 60px;
  align-items: center;
  padding: 0 25px;
  justify-content: space-between;
`;

const SubInfoListHeaderAction = styled(Row)`
  font-family: Roboto;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #1f94ff;
  cursor: pointer;
`;

const TweetsContainer = styled(Column)`
  padding: 20px;
  gap: 16px;
  max-height: 384px;
  overflow-y: auto;
`;

const TweetContainer = styled(Row)`
  width: 100%;
  height: 82px;
  padding: 7px;
  align-items: center;
  box-shadow: 0px 4px 14px 2px rgba(233, 236, 251, 0.5);
  border-radius: 4px;
  gap: 17px;
  text-align: justify;
`;

const TweetPhoto = styled.img`
  height: 68px;
  width: 68px;
  border-radius: 50%;
`;

const TweetText = styled(Column)`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0.01em;
  color: rgba(51, 51, 51, 0.5);
`;

const HighlightsContainer = styled(Column)`
  padding: 20px;
  gap: 23px;
  max-height: 900px;
  overflow-y: auto;
`;

const HighlightContainer = styled(Column)`
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 0px 4px 14px 2px rgba(233, 236, 251, 0.5);
  text-align: justify;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
`;

const HighlightPhoto = styled.img`
  width: 100%;
  border-radius: 16px 16px 0 0;
  height: 150px;
`;

const HighlightTextContainer = styled(Column)`
  padding: 14px 20px 38px 20px;
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
  div:nth-child(3) {
    font-weight: 500;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: rgba(51, 51, 51, 0.5);
  }
`;

const PaginationBarContainer = styled(PaginationBar)`
  margin-top: 32px !important;
  width: 177px;
`;

const CountryOptions = [
  {key: "India", value: "India", text: "India"},
  {key: "India", value: "India", text: "India"},
  {key: "India", value: "India", text: "India"},
];
const TeamOptions = [
  {key: "Barcelona", value: "Barcelona", text: "Barcelona"},
  {key: "Barcelona", value: "Barcelona", text: "Barcelona"},
  {key: "Barcelona", value: "Barcelona", text: "Barcelona"},
];
const ClubsOptions = [
  {key: "Barcelona", value: "Barcelona", text: "Barcelona"},
  {key: "Barcelona", value: "Barcelona", text: "Barcelona"},
  {key: "Barcelona", value: "Barcelona", text: "Barcelona"},
];
const LatestNewsOptions = [
  {key: "News", value: "News", text: "News"},
  {key: "Features", value: "Features", text: "Features"},
];

const Filters = (props) => (
  <FilterBarContainer>
    <FilterContainer>
      <FiltersContent>
        <FilterByText>Filter by:</FilterByText>
        <CustomSelect placeholder="Country" options={CountryOptions} />
        <CustomSelect placeholder="Team" options={TeamOptions} />
        <CustomSelect placeholder="Clubs" options={ClubsOptions} />
      </FiltersContent>
      <ResetFilter>
        <div onClick={() => alert("Under Development")}>Reset</div>
        <ResetFilterDivider />
        <div onClick={() => alert("Under Development")}>
          Save and Proceed <Icon name="arrow right" />
        </div>
      </ResetFilter>
    </FilterContainer>
  </FilterBarContainer>
);

const MainHighlight = (props) => (
  <MainHighlightContainer>
    <VideoPlayer controls name="media">
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        type="video/mp4"
      />
    </VideoPlayer>
    <MainHighlightTextContainer>
      <MainHighlightHeader>
        <MainHighlightHeaderText>
          Barcelona Vs Real Madrid (3-1) Highlights{" "}
        </MainHighlightHeaderText>
        13/10/20 | 1:22pm
      </MainHighlightHeader>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </MainHighlightTextContainer>
  </MainHighlightContainer>
);

const LatestNewsTabs = (props) => (
  <>
    <LatestNewsContainer>
      <LatestNewsPhoto src="https://picsum.photos/200" />
      <LatestNewsTextContainer>
        <LatestNewsTopic>
          Football <div>13/10/20 | 1:22pm</div>
        </LatestNewsTopic>
        <LatestNewsHeading>
          Is Messi finally leaving Barcelona?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </LatestNewsHeading>
        <LatestNewsByContainer>
          <LatestNewsByPhoto src="https://picsum.photos/200" />
          Barbera Simon
        </LatestNewsByContainer>
      </LatestNewsTextContainer>
    </LatestNewsContainer>

    <LatestNewsContainer>
      <LatestNewsPhoto src="https://picsum.photos/200" />
      <LatestNewsTextContainer>
        <LatestNewsTopic>
          Football <div>13/10/20 | 1:22pm</div>
        </LatestNewsTopic>
        <LatestNewsHeading>
          Is Messi finally leaving Barcelona?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </LatestNewsHeading>
        <LatestNewsByContainer>
          <LatestNewsByPhoto src="https://picsum.photos/200" />
          Barbera Simon
        </LatestNewsByContainer>
      </LatestNewsTextContainer>
    </LatestNewsContainer>

    <LatestNewsContainer>
      <LatestNewsPhoto src="https://picsum.photos/200" />
      <LatestNewsTextContainer>
        <LatestNewsTopic>
          Football <div>13/10/20 | 1:22pm</div>
        </LatestNewsTopic>
        <LatestNewsHeading>
          Is Messi finally leaving Barcelona?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </LatestNewsHeading>
        <LatestNewsByContainer>
          <LatestNewsByPhoto src="https://picsum.photos/200" />
          Barbera Simon
        </LatestNewsByContainer>
      </LatestNewsTextContainer>
    </LatestNewsContainer>

    <LatestNewsContainer>
      <LatestNewsPhoto src="https://picsum.photos/200" />
      <LatestNewsTextContainer>
        <LatestNewsTopic>
          Football <div>13/10/20 | 1:22pm</div>
        </LatestNewsTopic>
        <LatestNewsHeading>
          Is Messi finally leaving Barcelona?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </LatestNewsHeading>
        <LatestNewsByContainer>
          <LatestNewsByPhoto src="https://picsum.photos/200" />
          Barbera Simon
        </LatestNewsByContainer>
      </LatestNewsTextContainer>
    </LatestNewsContainer>

    <LatestNewsContainer>
      <LatestNewsPhoto src="https://picsum.photos/200" />
      <LatestNewsTextContainer>
        <LatestNewsTopic>
          Football <div>13/10/20 | 1:22pm</div>
        </LatestNewsTopic>
        <LatestNewsHeading>
          Is Messi finally leaving Barcelona?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </LatestNewsHeading>
        <LatestNewsByContainer>
          <LatestNewsByPhoto src="https://picsum.photos/200" />
          Barbera Simon
        </LatestNewsByContainer>
      </LatestNewsTextContainer>
    </LatestNewsContainer>

    <LatestNewsContainer>
      <LatestNewsPhoto src="https://picsum.photos/200" />
      <LatestNewsTextContainer>
        <LatestNewsTopic>
          Football <div>13/10/20 | 1:22pm</div>
        </LatestNewsTopic>
        <LatestNewsHeading>
          Is Messi finally leaving Barcelona?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </LatestNewsHeading>
        <LatestNewsByContainer>
          <LatestNewsByPhoto src="https://picsum.photos/200" />
          Barbera Simon
        </LatestNewsByContainer>
      </LatestNewsTextContainer>
    </LatestNewsContainer>

    <LatestNewsContainer>
      <LatestNewsPhoto src="https://picsum.photos/200" />
      <LatestNewsTextContainer>
        <LatestNewsTopic>
          Football <div>13/10/20 | 1:22pm</div>
        </LatestNewsTopic>
        <LatestNewsHeading>
          Is Messi finally leaving Barcelona?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </LatestNewsHeading>
        <LatestNewsByContainer>
          <LatestNewsByPhoto src="https://picsum.photos/200" />
          Barbera Simon
        </LatestNewsByContainer>
      </LatestNewsTextContainer>
    </LatestNewsContainer>
  </>
);

const Latest = (props) => (
  <LatestContainer>
    <LatestHeader>
      Latest
      <LatestNewsFilter>
        All <Dropdown floating options={LatestNewsOptions} trigger={<></>} />
      </LatestNewsFilter>
    </LatestHeader>
    <LatestNewsTabs {...props} />
  </LatestContainer>
);

const Tweets = (props) => (
  <TweetsContainer>
    <TweetContainer>
      <TweetPhoto src="https://picsum.photos/200" />
      <TweetText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TweetText>
    </TweetContainer>
    <TweetContainer>
      <TweetPhoto src="https://picsum.photos/200" />
      <TweetText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TweetText>
    </TweetContainer>
    <TweetContainer>
      <TweetPhoto src="https://picsum.photos/200" />
      <TweetText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TweetText>
    </TweetContainer>
    <TweetContainer>
      <TweetPhoto src="https://picsum.photos/200" />
      <TweetText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TweetText>
    </TweetContainer>
    <TweetContainer>
      <TweetPhoto src="https://picsum.photos/200" />
      <TweetText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TweetText>
    </TweetContainer>
    <TweetContainer>
      <TweetPhoto src="https://picsum.photos/200" />
      <TweetText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TweetText>
    </TweetContainer>
    <TweetContainer>
      <TweetPhoto src="https://picsum.photos/200" />
      <TweetText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TweetText>
    </TweetContainer>
    <TweetContainer>
      <TweetPhoto src="https://picsum.photos/200" />
      <TweetText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TweetText>
    </TweetContainer>
    <TweetContainer>
      <TweetPhoto src="https://picsum.photos/200" />
      <TweetText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TweetText>
    </TweetContainer>
  </TweetsContainer>
);

const TwitterList = (props) => (
  <SubInfoListContainer>
    <SubInfoListHeader>Twitter</SubInfoListHeader>
    <Tweets {...props} />
  </SubInfoListContainer>
);

const Highlights = (props) => (
  <HighlightsContainer>
    <HighlightContainer
      onClick={() => props.toggleState("isViewHighlightPopUpOpen")}
    >
      <HighlightPhoto src="https://picsum.photos/200/300" />
      <HighlightTextContainer>
        <div>Barcelona vs Real Madrid</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <div>13/10/20 | 1:22pm</div>
      </HighlightTextContainer>
    </HighlightContainer>

    <HighlightContainer
      onClick={() => props.toggleState("isViewHighlightPopUpOpen")}
    >
      <HighlightPhoto src="https://picsum.photos/200/300" />
      <HighlightTextContainer>
        <div>Barcelona vs Real Madrid</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <div>13/10/20 | 1:22pm</div>
      </HighlightTextContainer>
    </HighlightContainer>

    <HighlightContainer
      onClick={() => props.toggleState("isViewHighlightPopUpOpen")}
    >
      <HighlightPhoto src="https://picsum.photos/200/300" />
      <HighlightTextContainer>
        <div>Barcelona vs Real Madrid</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <div>13/10/20 | 1:22pm</div>
      </HighlightTextContainer>
    </HighlightContainer>

    <HighlightContainer
      onClick={() => props.toggleState("isViewHighlightPopUpOpen")}
    >
      <HighlightPhoto src="https://picsum.photos/200/300" />
      <HighlightTextContainer>
        <div>Barcelona vs Real Madrid</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <div>13/10/20 | 1:22pm</div>
      </HighlightTextContainer>
    </HighlightContainer>

    <HighlightContainer
      onClick={() => props.toggleState("isViewHighlightPopUpOpen")}
    >
      <HighlightPhoto src="https://picsum.photos/200/300" />
      <HighlightTextContainer>
        <div>Barcelona vs Real Madrid</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <div>13/10/20 | 1:22pm</div>
      </HighlightTextContainer>
    </HighlightContainer>

    <HighlightContainer
      onClick={() => props.toggleState("isViewHighlightPopUpOpen")}
    >
      <HighlightPhoto src="https://picsum.photos/200/300" />
      <HighlightTextContainer>
        <div>Barcelona vs Real Madrid</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <div>13/10/20 | 1:22pm</div>
      </HighlightTextContainer>
    </HighlightContainer>

    <HighlightContainer
      onClick={() => props.toggleState("isViewHighlightPopUpOpen")}
    >
      <HighlightPhoto src="https://picsum.photos/200/300" />
      <HighlightTextContainer>
        <div>Barcelona vs Real Madrid</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <div>13/10/20 | 1:22pm</div>
      </HighlightTextContainer>
    </HighlightContainer>
  </HighlightsContainer>
);

const HighlightsList = (props) => (
  <SubInfoListContainer>
    <SubInfoListHeader>
      Highlights{" "}
      <SubInfoListHeaderAction>see more {">>"}</SubInfoListHeaderAction>
    </SubInfoListHeader>
    <Highlights {...props} />
  </SubInfoListContainer>
);

const All = (props) => (
  <AllContainer>
    <Filters {...props} />
    <HorizontalDivider />
    <NewsHighlightsContainer>
      <NewsHighlightsLeftContainer>
        <MainHighlight {...props} />
        <Latest {...props} />
      </NewsHighlightsLeftContainer>
      <NewsHighlightsRightContainer>
        <TwitterList {...props} />
        <HighlightsList {...props} />
      </NewsHighlightsRightContainer>
    </NewsHighlightsContainer>

    <PaginationBarContainer
      boundaryRange={0}
      defaultActivePage={1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={10}
    />
  </AllContainer>
);

export default All;
