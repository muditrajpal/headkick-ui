import React from "react";
import { Tab, Button, Icon } from "semantic-ui-react";
import history from "historyObj";

const panes = [
  { menuItem: "Overview", path: "/tournament/overview" },
  { menuItem: "Matches", path: "/tournament/matches/list" },
  { menuItem: "Academies" },
  { menuItem: "Players" },
  { menuItem: "Teams" },
  { menuItem: "Fixures" },
];

const TournamentNav = ({ activeTab }) => {
  return (
    <div className="tournamentNav">
      <Tab
        panes={panes}
        activeIndex={activeTab}
        onTabChange={(e, data) =>
          data.activeIndex != activeTab
            ? history.push(panes[data.activeIndex].path)
            : ""
        }
      />
      <Button basic color="black" size="small" className="createTeam">
        <Icon name="plus" /> Create Team
      </Button>
    </div>
  );
};

export default TournamentNav;
