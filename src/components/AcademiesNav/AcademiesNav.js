import React from "react";
import { Tab, Button, Icon } from "semantic-ui-react";
import history from "historyObj";

const panes = [
  {menuItem: "Overview", path: "/academies/overview"},
  {menuItem: "Players", path: "/academies/players/list"},
  {menuItem: "Teams", path: "/academies/teams"},
  {menuItem: "Training"},
];

const AcademiesNav = ({ activeTab }) => {
  return (
    <div className="academiesNav">
      <Tab
        panes={panes}
        activeIndex={activeTab}
        onTabChange={(e, data) =>
          data.activeIndex != activeTab
            ? history.push(panes[data.activeIndex].path)
            : ""
        }
      />
    </div>
  );
};

export default AcademiesNav;
