import React, {useState} from "react";
import styled, {css} from "styled-components";
import {Dropdown, Icon} from "semantic-ui-react";
import history from "historyObj";
import ThemeButton from "shared/components/ThemeButton";
import PaginationBar from "shared/components/PaginationBar";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(Row)`
  gap: 30px;
`;

const LeftContainer = styled(Column)`
  flex: 2;
  gap: 30px;
`;

const RightContainer = styled(Column)`
  flex: 1;
  gap: 30px;
`;

const HeaderText = styled(Row)`
  font-weight: bold;
  font-size: 35px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: #12216d;
`;

const BlogByContainer = styled(Row)`
  gap: 8px;
  align-items: center;
`;

const BlogByPhoto = styled.img`
  border-radius: 50%;
`;

const BlogByTextContainer = styled(Column)`
  width: 100%;
  gap: 11px;
`;

const HorizontalDivider = styled(Row)`
  width: 100%;
  border: 1px solid #e6e6e6;
`;

const BlogByText = styled(Column)`
  font-size: 14px !important;
  line-height: 16px;
  font-weight: 500;
  color: #999999;
  span {
    span {
      color: #007ae9;
    }
  }
  div {
    font-size: 12px !important;
    line-height: 25px;
  }
`;

const SelectedBlogPhoto = styled.img`
  width: 100%;
  height: 422px;
`;

const SelectedBlogText = styled(Column)`
  font-size: 14px;
  line-height: 150%;
  color: #c4c4c4;
  gap: 22px;
  text-align: justify;
`;

const SelectedBlogTextHeader = styled(Row)`
  font-weight: bold;
  color: #0d1757;
`;

const ButtonContainer = styled(Row)`
  justify-content: center;
  gap: 33px;
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

const LatestBlogListContainer = styled(Column)`
  padding: 20px;
  gap: 23px;
`;

const LatestBlogContainer = styled(Column)`
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 0px 4px 14px 2px rgba(233, 236, 251, 0.5);
  text-align: justify;
`;

const LatestBlogPhoto = styled.img`
  width: 100%;
  border-radius: 16px 16px 0 0;
  height: 150px;
`;

const LatestBlogTextContainer = styled(Column)`
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
  margin: 20px !important;
  width: 177px;
`;

const BlogHeading = (props) => (
  <>
    <HeaderText>5 players Real Madrid can sign in 2021</HeaderText>
    <BlogByContainer>
      <BlogByPhoto width="40px" height="40px" src="https://picsum.photos/200" />
      <BlogByTextContainer>
        <HorizontalDivider />
        <BlogByText>
          <span>
            By <span>Barbera Simon</span>
          </span>
          <div>13/10/20</div>
        </BlogByText>
      </BlogByTextContainer>
    </BlogByContainer>
  </>
);

const SelectedBlogDetails = (props) => (
  <>
    <SelectedBlogPhoto src="https://picsum.photos/200" />
    <SelectedBlogText>
      <Row>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Row>
      <Row>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Row>
      <SelectedBlogTextHeader>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?{" "}
      </SelectedBlogTextHeader>
      <Row>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Row>
      <Row>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Row>
      <SelectedBlogTextHeader>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?{" "}
      </SelectedBlogTextHeader>
      <Row>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Row>
      <Row>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Row>
    </SelectedBlogText>
  </>
);

const LatestBlogList = (props) => (
  <LatestBlogListContainer>
    <LatestBlogContainer onClick={() => alert("Under Development")}>
      <LatestBlogPhoto src="https://picsum.photos/200/300" />
      <LatestBlogTextContainer>
        <div>Barcelona vs Real Madrid</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <BlogByContainer>
          <BlogByPhoto
            width="30px"
            height="30px"
            src="https://picsum.photos/200"
          />
          <BlogByTextContainer>
            <BlogByText>
              <span>
                <span>Barbera Simon</span>
              </span>
              <div>13/10/20 | 1:22pm</div>
            </BlogByText>
          </BlogByTextContainer>
        </BlogByContainer>
      </LatestBlogTextContainer>
    </LatestBlogContainer>
    <LatestBlogContainer onClick={() => alert("Under Development")}>
      <LatestBlogPhoto src="https://picsum.photos/200/300" />
      <LatestBlogTextContainer>
        <div>Barcelona vs Real Madrid</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <BlogByContainer>
          <BlogByPhoto
            width="30px"
            height="30px"
            src="https://picsum.photos/200"
          />
          <BlogByTextContainer>
            <BlogByText>
              <span>
                <span>Barbera Simon</span>
              </span>
              <div>13/10/20 | 1:22pm</div>
            </BlogByText>
          </BlogByTextContainer>
        </BlogByContainer>
      </LatestBlogTextContainer>
    </LatestBlogContainer>
    <LatestBlogContainer onClick={() => alert("Under Development")}>
      <LatestBlogPhoto src="https://picsum.photos/200/300" />
      <LatestBlogTextContainer>
        <div>Barcelona vs Real Madrid</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <BlogByContainer>
          <BlogByPhoto
            width="30px"
            height="30px"
            src="https://picsum.photos/200"
          />
          <BlogByTextContainer>
            <BlogByText>
              <span>
                <span>Barbera Simon</span>
              </span>
              <div>13/10/20 | 1:22pm</div>
            </BlogByText>
          </BlogByTextContainer>
        </BlogByContainer>
      </LatestBlogTextContainer>
    </LatestBlogContainer>
  </LatestBlogListContainer>
);

const LatestBlogs = (props) => (
  <SubInfoListContainer>
    <SubInfoListHeader>Latest</SubInfoListHeader>
    <LatestBlogList {...props} />
    <PaginationBarContainer
      boundaryRange={0}
      defaultActivePage={1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={10}
    />
  </SubInfoListContainer>
);

const BlogDetails = (props) => (
  <Container>
    <LeftContainer>
      <BlogHeading {...props} />
      <SelectedBlogDetails {...props} />
      <HorizontalDivider />
      <ButtonContainer>
        <ThemeButton
          customCss={{
            width: "102px",
            backgroundColor: "#FFFFFF",
            color: "#0D1757",
            border: "1px solid #0D1757",
          }}
          isDisabled={false}
          onClickAction={() => alert("Under Development")}
          children={"Previous"}
        />
        <ThemeButton
          isDisabled={false}
          onClickAction={() => alert("Under Development")}
          children={"Next"}
        />
      </ButtonContainer>
    </LeftContainer>
    <RightContainer>
      <LatestBlogs {...props} />
    </RightContainer>
  </Container>
);

export default BlogDetails;
