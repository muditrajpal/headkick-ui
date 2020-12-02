import React from "react";
import styled from "styled-components";
import {Tabs} from "./index";
import All from "./SubComponents/All";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewsContainer = styled(Column)`
  top: 6rem;
  position: absolute;
  float: left;
  padding: 31px 28px;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  width: 98.3%;
`;

const TabsSelectorContainer = styled(Row)`
  gap: 80px;
  border-bottom: 1px solid #e8ebfc;
  justify-content: space-between;
`;

const TabContainer = styled(Column)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  color: #12216d;
  border-bottom: ${({isSelected}) =>
    isSelected ? "4px solid #0d1757" : "none"};
  padding: 18px;
  min-width: 10%;
  align-items: center;
  cursor: pointer;
`;

const TabsSelector = (props) => (
  <TabsSelectorContainer>
    <TabContainer
      isSelected={props.state?.selectedTab === Tabs.ALL}
      onClick={() => props.toggleTabs(Tabs.ALL)}
    >
      All
    </TabContainer>
    <TabContainer
      isSelected={props.state?.selectedTab === Tabs.TEAMS}
      onClick={() => props.toggleTabs(Tabs.TEAMS)}
    >
      Teams
    </TabContainer>
    <TabContainer
      isSelected={props.state?.selectedTab === Tabs.LEAGUE_CUPS}
      onClick={() => props.toggleTabs(Tabs.LEAGUE_CUPS)}
    >
      Leagues / Cups
    </TabContainer>
    <TabContainer
      isSelected={props.state?.selectedTab === Tabs.FIXTURES}
      onClick={() => props.toggleTabs(Tabs.FIXTURES)}
    >
      Fixtures
    </TabContainer>
    <TabContainer
      isSelected={props.state?.selectedTab === Tabs.RESULTS}
      onClick={() => props.toggleTabs(Tabs.RESULTS)}
    >
      Results
    </TabContainer>
    <TabContainer
      isSelected={props.state?.selectedTab === Tabs.TRANSFERS}
      onClick={() => props.toggleTabs(Tabs.TRANSFERS)}
    >
      Transfers
    </TabContainer>
  </TabsSelectorContainer>
);

const News = (props) => (
  <NewsContainer>
    <TabsSelector {...props} />
    {props.state?.selectedTab === Tabs.ALL && <All {...props} />}
  </NewsContainer>
);

export default News;
