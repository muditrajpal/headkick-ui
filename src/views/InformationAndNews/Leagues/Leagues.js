import React from "react";
import styled from "styled-components";
import {Dropdown, Icon} from "semantic-ui-react";
import history from "historyObj";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const AllContainer = styled(Column)`
  top: 6rem;
  position: absolute;
  float: left;
  padding: 31px 28px;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  width: 98.3%;
  max-height: calc(100vh - 160px);
  overflow-y: auto;
`;

const FiltersContainer = styled(Row)`
  padding: 31px 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  gap: 35px;
`;

const Filter = styled(Row)`
  color: #0d1757;
`;

const LeaguesListContainer = styled.table`
  tr:nth-child(even) {
    background: #f6f7fe;
  }
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #e9ecfb;
  box-sizing: border-box;
`;

const TableHeader = styled.tr`
  background: #e9ecfb;
  color: #000000;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
`;

const TableRow = styled.tr`
  color: #333333;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  :hover {
    background: #e9ecfb !important;
  }
`;

const TableColumn = styled.td`
  padding: 19px 22px;
`;

const TableColumnCenterAligned = styled(TableColumn)`
  text-align: center;
`;

const LeagueNameContainer = styled(Row)`
  gap: 5px;
`;

const LeagueSymbol = styled.img`
  height: 16px;
  width: 16px;
  border-radius: 50%;
`;

const CountryFlag = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

const SocialIconContainer = styled(Row)`
  justify-content: center;
  color: #1a2e99;
  gap: 18px;
`;

const SortByOptions = [
  {key: "Name", value: "Name", text: "Name"},
  {key: "Country", value: "Country", text: "Country"},
  {key: "Clubs", value: "Clubs", text: "Clubs"},
  {key: "Players", value: "Players", text: "Players"},
];

const LeagueListHeader = () => (
  <TableHeader>
    <TableColumn>NAME</TableColumn>
    <TableColumnCenterAligned>COUNTRY</TableColumnCenterAligned>
    <TableColumnCenterAligned>CLUBS</TableColumnCenterAligned>
    <TableColumnCenterAligned>PLAYERS</TableColumnCenterAligned>
    <TableColumnCenterAligned>AVERAGE AGE</TableColumnCenterAligned>
    <TableColumnCenterAligned>FOREIGNERS</TableColumnCenterAligned>
    <TableColumnCenterAligned>SOCIAL MEDIA</TableColumnCenterAligned>
  </TableHeader>
);

const LeagueList = (props) => (
  <LeaguesListContainer>
    <LeagueListHeader />
    <tbody>
      <TableRow
        onClick={() =>
          history.push("/information-and-news/leagues/details?id=123")
        }
      >
        <TableColumn>
          <LeagueNameContainer>
            <LeagueSymbol src="https://picsum.photos/200" />
            LaLiga
          </LeagueNameContainer>
        </TableColumn>
        <TableColumnCenterAligned>
          <CountryFlag src="https://picsum.photos/200" />
        </TableColumnCenterAligned>
        <TableColumnCenterAligned>34</TableColumnCenterAligned>
        <TableColumnCenterAligned>534</TableColumnCenterAligned>
        <TableColumnCenterAligned>24</TableColumnCenterAligned>
        <TableColumnCenterAligned>80</TableColumnCenterAligned>
        <TableColumnCenterAligned>
          <SocialIconContainer>
            <Icon name="facebook f" />
            <Icon name="twitter" />
            <Icon name="instagram" />
          </SocialIconContainer>
        </TableColumnCenterAligned>
      </TableRow>
      <TableRow
        onClick={() =>
          history.push("/information-and-news/leagues/details?id=123")
        }
      >
        <TableColumn>
          <LeagueNameContainer>
            <LeagueSymbol src="https://picsum.photos/200" />
            LaLiga
          </LeagueNameContainer>
        </TableColumn>
        <TableColumnCenterAligned>
          <CountryFlag src="https://picsum.photos/200" />
        </TableColumnCenterAligned>
        <TableColumnCenterAligned>34</TableColumnCenterAligned>
        <TableColumnCenterAligned>534</TableColumnCenterAligned>
        <TableColumnCenterAligned>24</TableColumnCenterAligned>
        <TableColumnCenterAligned>80</TableColumnCenterAligned>
        <TableColumnCenterAligned>
          <SocialIconContainer>
            <Icon name="facebook f" />
            <Icon name="twitter" />
            <Icon name="instagram" />
          </SocialIconContainer>
        </TableColumnCenterAligned>
      </TableRow>
      <TableRow
        onClick={() =>
          history.push("/information-and-news/leagues/details?id=123")
        }
      >
        <TableColumn>
          <LeagueNameContainer>
            <LeagueSymbol src="https://picsum.photos/200" />
            LaLiga
          </LeagueNameContainer>
        </TableColumn>
        <TableColumnCenterAligned>
          <CountryFlag src="https://picsum.photos/200" />
        </TableColumnCenterAligned>
        <TableColumnCenterAligned>34</TableColumnCenterAligned>
        <TableColumnCenterAligned>534</TableColumnCenterAligned>
        <TableColumnCenterAligned>24</TableColumnCenterAligned>
        <TableColumnCenterAligned>80</TableColumnCenterAligned>
        <TableColumnCenterAligned>
          <SocialIconContainer>
            <Icon name="facebook f" />
            <Icon name="twitter" />
            <Icon name="instagram" />
          </SocialIconContainer>
        </TableColumnCenterAligned>
      </TableRow>
      <TableRow
        onClick={() =>
          history.push("/information-and-news/leagues/details?id=123")
        }
      >
        <TableColumn>
          <LeagueNameContainer>
            <LeagueSymbol src="https://picsum.photos/200" />
            LaLiga
          </LeagueNameContainer>
        </TableColumn>
        <TableColumnCenterAligned>
          <CountryFlag src="https://picsum.photos/200" />
        </TableColumnCenterAligned>
        <TableColumnCenterAligned>34</TableColumnCenterAligned>
        <TableColumnCenterAligned>534</TableColumnCenterAligned>
        <TableColumnCenterAligned>24</TableColumnCenterAligned>
        <TableColumnCenterAligned>80</TableColumnCenterAligned>
        <TableColumnCenterAligned>
          <SocialIconContainer>
            <Icon name="facebook f" />
            <Icon name="twitter" />
            <Icon name="instagram" />
          </SocialIconContainer>
        </TableColumnCenterAligned>
      </TableRow>
      <TableRow
        onClick={() =>
          history.push("/information-and-news/leagues/details?id=123")
        }
      >
        <TableColumn>
          <LeagueNameContainer>
            <LeagueSymbol src="https://picsum.photos/200" />
            LaLiga
          </LeagueNameContainer>
        </TableColumn>
        <TableColumnCenterAligned>
          <CountryFlag src="https://picsum.photos/200" />
        </TableColumnCenterAligned>
        <TableColumnCenterAligned>34</TableColumnCenterAligned>
        <TableColumnCenterAligned>534</TableColumnCenterAligned>
        <TableColumnCenterAligned>24</TableColumnCenterAligned>
        <TableColumnCenterAligned>80</TableColumnCenterAligned>
        <TableColumnCenterAligned>
          <SocialIconContainer>
            <Icon name="facebook f" />
            <Icon name="twitter" />
            <Icon name="instagram" />
          </SocialIconContainer>
        </TableColumnCenterAligned>
      </TableRow>
      <TableRow
        onClick={() =>
          history.push("/information-and-news/leagues/details?id=123")
        }
      >
        <TableColumn>
          <LeagueNameContainer>
            <LeagueSymbol src="https://picsum.photos/200" />
            LaLiga
          </LeagueNameContainer>
        </TableColumn>
        <TableColumnCenterAligned>
          <CountryFlag src="https://picsum.photos/200" />
        </TableColumnCenterAligned>
        <TableColumnCenterAligned>34</TableColumnCenterAligned>
        <TableColumnCenterAligned>534</TableColumnCenterAligned>
        <TableColumnCenterAligned>24</TableColumnCenterAligned>
        <TableColumnCenterAligned>80</TableColumnCenterAligned>
        <TableColumnCenterAligned>
          <SocialIconContainer>
            <Icon name="facebook f" />
            <Icon name="twitter" />
            <Icon name="instagram" />
          </SocialIconContainer>
        </TableColumnCenterAligned>
      </TableRow>
      <TableRow
        onClick={() =>
          history.push("/information-and-news/leagues/details?id=123")
        }
      >
        <TableColumn>
          <LeagueNameContainer>
            <LeagueSymbol src="https://picsum.photos/200" />
            LaLiga
          </LeagueNameContainer>
        </TableColumn>
        <TableColumnCenterAligned>
          <CountryFlag src="https://picsum.photos/200" />
        </TableColumnCenterAligned>
        <TableColumnCenterAligned>34</TableColumnCenterAligned>
        <TableColumnCenterAligned>534</TableColumnCenterAligned>
        <TableColumnCenterAligned>24</TableColumnCenterAligned>
        <TableColumnCenterAligned>80</TableColumnCenterAligned>
        <TableColumnCenterAligned>
          <SocialIconContainer>
            <Icon name="facebook f" />
            <Icon name="twitter" />
            <Icon name="instagram" />
          </SocialIconContainer>
        </TableColumnCenterAligned>
      </TableRow>
      <TableRow
        onClick={() =>
          history.push("/information-and-news/leagues/details?id=123")
        }
      >
        <TableColumn>
          <LeagueNameContainer>
            <LeagueSymbol src="https://picsum.photos/200" />
            LaLiga
          </LeagueNameContainer>
        </TableColumn>
        <TableColumnCenterAligned>
          <CountryFlag src="https://picsum.photos/200" />
        </TableColumnCenterAligned>
        <TableColumnCenterAligned>34</TableColumnCenterAligned>
        <TableColumnCenterAligned>534</TableColumnCenterAligned>
        <TableColumnCenterAligned>24</TableColumnCenterAligned>
        <TableColumnCenterAligned>80</TableColumnCenterAligned>
        <TableColumnCenterAligned>
          <SocialIconContainer>
            <Icon name="facebook f" />
            <Icon name="twitter" />
            <Icon name="instagram" />
          </SocialIconContainer>
        </TableColumnCenterAligned>
      </TableRow>
    </tbody>
  </LeaguesListContainer>
);

const Leagues = (props) => (
  <AllContainer>
    <FiltersContainer>
      <Filter>
        Filter by{" "}
        <Dropdown
          floating
          onClick={() => props.toggleState("isFilterByPopUpOpen")}
        />
      </Filter>
      <Filter>
        Sort by <Dropdown floating options={SortByOptions} trigger={<></>} />
      </Filter>
    </FiltersContainer>
    <LeagueList {...props} />
  </AllContainer>
);

export default Leagues;
