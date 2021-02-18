import React from "react";
import {Tab, Button, Icon} from "semantic-ui-react";
import history from "historyObj";

const panes = [
  {menuItem: "News", path: "/information-and-news/news"},
  {
    menuItem: "Leagues",
    path: "/information-and-news/leagues",
  },
  {menuItem: "Teams", path: "/information-and-news/teams"},
  {menuItem: "Blogs", path: "/information-and-news/blogs"},
];

const InformationAndNewsNav = ({activeTab}) => {
  return (
    <div className="informationAndNewsNav">
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

export default InformationAndNewsNav;
