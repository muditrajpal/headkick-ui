import React from "react";
import styled from "styled-components";
import {Search} from "semantic-ui-react";
import history from "historyObj";

const Tabs = {
  MY_COURSES: "/my-courses",
  ALL_COURSES: "/all-courses",
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabsSelectorContainer = styled(Row)`
  flex: 1;
  gap: 80px;
  border-bottom: 1px solid #e8ebfc;
`;

const TabContainer = styled(Column)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  justify-content: center;
  color: #12216d;
  border-bottom: ${({isSelected}) =>
    isSelected ? "4px solid #0d1757" : "none"};
  padding: 18px;
  cursor: pointer;
`;

const SearchBoxContainer = styled(Column)`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

const SearchBox = styled(Search)`
  width: 100%;
  max-width: 400px;
  .ui.search {
    width: 100%;
  }
  .ui.input {
    width: 100%;
  }
`;

const HorizontalDivider = styled(Row)`
  border-bottom: 1px solid #e8ebfc;
  margin: 30px 0;
`;

const TabsSelector = ({selectedTab, selectTab}) => (
  <TabsSelectorContainer>
    <TabContainer
      isSelected={selectedTab === Tabs.MY_COURSES}
      onClick={() => history.push(`/online-coaching${Tabs.MY_COURSES}`)}
    >
      My Courses
    </TabContainer>
    <TabContainer
      isSelected={selectedTab === Tabs.ALL_COURSES}
      onClick={() => history.push(`/online-coaching${Tabs.ALL_COURSES}`)}
    >
      All Courses
    </TabContainer>
    <SearchBoxContainer>
      <SearchBox placeholder="Search by academy name, or country" />
    </SearchBoxContainer>
  </TabsSelectorContainer>
);

const OnlineCoachingNav = (props) => {
  return <TabsSelector selectedTab={props.selectedTab} />;
};

export default OnlineCoachingNav;
