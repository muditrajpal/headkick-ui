import React from "react";
import { Tab, Button, Icon } from "semantic-ui-react";
import history from "historyObj";

const panes = {
  guest:[
  { menuItem: "Overview", path: "/tournament/guest/overview" },
  { menuItem: "Matches", path: "/tournament/guest/matches/list" },
  { menuItem: "Academies" },
  { menuItem: "Players" , path: "/tournament/guest/players/list" },
  { menuItem: "Teams" },
],
tournamentManager:[
  { menuItem: "Overview", path: "/tournament/overview" },
  { menuItem: "Matches", path: "/tournament/matches/list" },
  { menuItem: "Academies" },
  { menuItem: "Players"},
  { menuItem: "Teams" },
  { menuItem: "Fixures", path: "/tournament/fixtures" },
]
};

const TournamentNav = ({ activeTab,type }) => {
  return (
    <div className="tournamentNav">
      <Tab
        panes={panes[type]}
        activeIndex={activeTab}
        onTabChange={(e, data) =>
          data.activeIndex != activeTab
            ? history.push(panes[data.activeIndex].path)
            : ""
        }
      />
      <Button basic color="black" size="mini" className="createTeam">
        <Icon name="plus" /> Create Team
      </Button>
    </div>
  );
};

export default TournamentNav;
