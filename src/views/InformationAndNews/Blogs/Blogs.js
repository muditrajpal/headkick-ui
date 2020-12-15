import React from "react";
import styled from "styled-components";
import PaginationBar from "shared/components/PaginationBar";
import history from "historyObj";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlogsContainer = styled(Column)`
  top: 6rem;
  position: absolute;
  float: left;
  padding: 31px 28px;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  width: 98.3%;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`;

const BlogHighlightsContainer = styled(Row)`
  gap: 30px;
`;

const BlogHighlightsLeftContainer = styled(Column)`
  flex: 2;
  gap: 50px;
`;

const BlogHighlightsRightContainer = styled(Column)`
  flex: 1;
  gap: 30px;
`;

const MainBlogContainer = styled(Column)`
  background: #ffffff;
  box-shadow: 0px 4px 14px 2px rgba(233, 236, 251, 0.5);
  border-radius: 16px;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 400px;
  border-radius: 16px 16px 0 0;
  outline: none;
  background: #000000;
`;

const MainBlogTextContainer = styled(Column)`
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

const MainBlogHeader = styled(Row)`
  flex: 1;
  justify-content: space-between;
`;

const MainBlogHeaderText = styled(Column)`
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

const LatestBlogContainer = styled(Row)`
  gap: 26px;
  background: #ffffff;
  box-shadow: 0px 4px 14px 2px rgba(233, 236, 251, 0.5);
  border-radius: 16px;
  min-height: 204px;
  width: 100%;
  cursor: pointer;
`;

const LatestBlogPhoto = styled.img`
  width: 204px;
  height: 204px;
  border-radius: 16px 0 0 16px;
`;

const LatestBlogTextContainer = styled(Column)`
  justify-content: center;
  gap: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #c4c4c4;
`;

const LatestBlogTopic = styled(Row)`
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

const LatestBlogHeading = styled(Column)`
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

const LatestBlogByContainer = styled(Row)`
  gap: 12px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: #007ae9;
  align-items: center;
`;

const LatestBlogByPhoto = styled.img`
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

const FeaturedBlogsContainer = styled(Column)`
  padding: 20px;
  gap: 23px;
  max-height: 900px;
  overflow-y: auto;
`;

const FeaturedBlogContainer = styled(Column)`
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 0px 4px 14px 2px rgba(233, 236, 251, 0.5);
  text-align: justify;
`;

const FeaturedBlogPhoto = styled.img`
  width: 100%;
  border-radius: 16px 16px 0 0;
  height: 150px;
`;

const FeaturedBlogTextContainer = styled(Column)`
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

const RightPhotoBanner = styled.img`
  width: 100%;
  height: 644px;
  border-radius: 10px;
`;

const MainBlog = (props) => (
  <MainBlogContainer>
    <VideoPlayer controls name="media">
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        type="video/mp4"
      />
    </VideoPlayer>
    <MainBlogTextContainer>
      <MainBlogHeader>
        <MainBlogHeaderText>
          Barcelona Vs Real Madrid (3-1) Highlights{" "}
        </MainBlogHeaderText>
        13/10/20 | 1:22pm
      </MainBlogHeader>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </MainBlogTextContainer>
  </MainBlogContainer>
);

const LatestBlogTabs = (props) => (
  <>
    <LatestBlogContainer
      onClick={() => history.push("/information-and-news/blogs/details")}
    >
      <LatestBlogPhoto src="https://picsum.photos/200" />
      <LatestBlogTextContainer>
        <LatestBlogTopic>
          Football <div>13/10/20 | 1:22pm</div>
        </LatestBlogTopic>
        <LatestBlogHeading>
          Is Messi finally leaving Barcelona?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </LatestBlogHeading>
        <LatestBlogByContainer>
          <LatestBlogByPhoto src="https://picsum.photos/200" />
          Barbera Simon
        </LatestBlogByContainer>
      </LatestBlogTextContainer>
    </LatestBlogContainer>
    <LatestBlogContainer
      onClick={() => history.push("/information-and-news/blogs/details")}
    >
      <LatestBlogPhoto src="https://picsum.photos/200" />
      <LatestBlogTextContainer>
        <LatestBlogTopic>
          Football <div>13/10/20 | 1:22pm</div>
        </LatestBlogTopic>
        <LatestBlogHeading>
          Is Messi finally leaving Barcelona?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </LatestBlogHeading>
        <LatestBlogByContainer>
          <LatestBlogByPhoto src="https://picsum.photos/200" />
          Barbera Simon
        </LatestBlogByContainer>
      </LatestBlogTextContainer>
    </LatestBlogContainer>
    <LatestBlogContainer
      onClick={() => history.push("/information-and-news/blogs/details")}
    >
      <LatestBlogPhoto src="https://picsum.photos/200" />
      <LatestBlogTextContainer>
        <LatestBlogTopic>
          Football <div>13/10/20 | 1:22pm</div>
        </LatestBlogTopic>
        <LatestBlogHeading>
          Is Messi finally leaving Barcelona?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </LatestBlogHeading>
        <LatestBlogByContainer>
          <LatestBlogByPhoto src="https://picsum.photos/200" />
          Barbera Simon
        </LatestBlogByContainer>
      </LatestBlogTextContainer>
    </LatestBlogContainer>
  </>
);

const Latest = (props) => (
  <LatestContainer>
    <LatestHeader>Latest</LatestHeader>
    <LatestBlogTabs {...props} />
  </LatestContainer>
);

const FeaturedBlogs = (props) => (
  <FeaturedBlogsContainer>
    <FeaturedBlogContainer
      onClick={() =>
        history.push("/information-and-news/blogs/featured/details")
      }
    >
      <FeaturedBlogPhoto src="https://picsum.photos/200/300" />
      <FeaturedBlogTextContainer>
        <div>Barcelona vs Real Madrid</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <div>13/10/20 | 1:22pm</div>
      </FeaturedBlogTextContainer>
    </FeaturedBlogContainer>
  </FeaturedBlogsContainer>
);

const FeaturedBlogsList = (props) => (
  <SubInfoListContainer>
    <SubInfoListHeader>
      Featured Blogs{" "}
      <SubInfoListHeaderAction>see more {">>"}</SubInfoListHeaderAction>
    </SubInfoListHeader>
    <FeaturedBlogs {...props} />
  </SubInfoListContainer>
);

const Blogs = (props) => (
  <BlogsContainer>
    <BlogHighlightsContainer>
      <BlogHighlightsLeftContainer>
        <MainBlog {...props} />
        <Latest {...props} />
      </BlogHighlightsLeftContainer>
      <BlogHighlightsRightContainer>
        <RightPhotoBanner src="https://picsum.photos/200" />
        <FeaturedBlogsList {...props} />
      </BlogHighlightsRightContainer>
    </BlogHighlightsContainer>

    <PaginationBarContainer
      boundaryRange={0}
      defaultActivePage={1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={10}
    />
  </BlogsContainer>
);

export default Blogs;
