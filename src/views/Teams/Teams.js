import React,{useState,useEffect} from "react";
import styled from "styled-components";
import ThemeButton from "shared/components/ThemeButton";
import { Icon } from "semantic-ui-react";
import history from "historyObj";
import { Tabs } from "./index";
import TableView from "./TableView";
import SquadView from "./SquadView";
import queryString from "query-string";
import { fetchTeamDetail } from "apis/team";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const TeamsContainer = styled.div`
bottom:0;
  top: 6rem;
  position: absolute;
  float: left;
  margin: auto;
  padding: 31px 28px;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  width: 98.3%;
  overflow-y: auto;
  max-height: calc(100vh - 9rem);
`;

const TextHeading = styled(Row)`
  font-family: Roboto;
  font-size: 14px;
  line-height: 20px;
  color: #979797;
`;

const ClubLogo = styled.img`
  height: 66px;
  width: 66px;
`;

const ClubName = styled(Row)`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  color: #333333;
`;

const CoachPhoto = styled.img`
  height: 74px;
  width: 74px;
  border-radius: 50%;
`;

const CoachName = styled(Row)`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  color: #12216d;
  text-align: right;
`;

const ClubHeaderContainer = styled(Row)`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  gap: 19px;
`;

const CoachHeaderContainer = styled(Row)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 19px;
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
  border-bottom: ${({ isSelected }) =>
    isSelected ? "4px solid #0d1757" : "none"};
  padding: 18px;
  cursor: pointer;
`;

const TeamsHeader = ({teamDetail}) => (
  <Column style={{ gap: 24 }}>
    <Row>
      <ThemeButton
        customCss={{
          width: 231,
          background: "#FFFFFF",
          color: "#0D1757",
          border: "1px solid #0D1757",
        }}
        isDisabled={false}
        onClickAction={() => history.push("/academies/teams/list")}
        children={
          <>
            <Icon name="arrow left" />
            Go Back to List of Teams
          </>
        }
      />
    </Row>
    <Row>
      <ClubHeaderContainer>
        <Column>
          <ClubLogo src={teamDetail.logoImg} />
        </Column>
        <Column style={{ gap: 5 }}>
          <TextHeading>Club</TextHeading>
          <ClubName>{teamDetail.name}</ClubName>
        </Column>
      </ClubHeaderContainer>
      <CoachHeaderContainer>
        <Column style={{ gap: 5 }}>
          <TextHeading style={{ justifyContent: "flex-end" }}>
            Coach
          </TextHeading>
          <CoachName>{`${teamDetail.coach.firstName} ${teamDetail.coach.lastName}`}</CoachName>
        </Column>
        <Column>
          <CoachPhoto src={teamDetail.coach.img} />
        </Column>
      </CoachHeaderContainer>
    </Row>
  </Column>
);

const TabsSelector = (props) => (
  <TabsSelectorContainer>
    <TabContainer
      isSelected={props.state?.selectedTab === Tabs.TABLE_VIEW}
      onClick={() => props.toggleTabs(Tabs.TABLE_VIEW)}
    >
      Table view
    </TabContainer>
    <TabContainer
      isSelected={props.state?.selectedTab === Tabs.SQUAD_VIEW}
      onClick={() => props.toggleTabs(Tabs.SQUAD_VIEW)}
    >
      Squad view
    </TabContainer>
  </TabsSelectorContainer>
);

const Teams = (props) => {
  const search = props.location.search;
  const queryStringSearch = queryString.parse(search);
  const teamId = queryStringSearch.id;
  const canEdit = queryStringSearch.canEdit;
  const [teamDetail, setTeamDetail] = useState(null);
  useEffect(() => {
    if (!teamId) {
      history.push("/academies/teams/list");
      return;
    }
    fetchTeamDetail({
      id: teamId,
    })
      .then((data) => {
        if (data.sc && data.result) {
          setTeamDetail(data.result);
        }
      })
      .catch(() => {});
  }, [teamId]);
  if (!teamDetail) return <div />;
  return (
    <TeamsContainer>
      <TeamsHeader teamDetail={teamDetail} />
      <TabsSelector {...props} />
      {props.state?.selectedTab === Tabs.TABLE_VIEW ? (
        <TableView  teamDetail={teamDetail} />
      ) : (
        <SquadView {...props} teamDetail={teamDetail} />
      )}
    </TeamsContainer>
  );
};

export default Teams;
