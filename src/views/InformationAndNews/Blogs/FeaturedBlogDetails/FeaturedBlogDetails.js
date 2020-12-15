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

const ScrollableContainer = styled(Column)`
  padding: 5px;
  top: 6rem;
  position: absolute;
  float: left;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  padding: 30px;
  width: 98.3%;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
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
  margin: 65px 0 20px 0 !important;
  width: 177px;
`;

const RightPhotoBanner = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const BlogHeading = (props) => (
  <>
    <HeaderText>Man U vs Man C</HeaderText>
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
    </SelectedBlogText>
  </>
);

const BlogDetails = (props) => (
  <ScrollableContainer>
    <Container>
      <LeftContainer>
        <BlogHeading {...props} />
        <SelectedBlogDetails {...props} />
        <PaginationBarContainer
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={10}
        />
        <HorizontalDivider />
        <Row>
          <ThemeButton
            isDisabled={false}
            onClickAction={() => history.push("/information-and-news/blogs")}
            children={"Return"}
          />
        </Row>
      </LeftContainer>
      <RightContainer>
        <RightPhotoBanner src="https://picsum.photos/200" />
      </RightContainer>
    </Container>
  </ScrollableContainer>
);

export default BlogDetails;
