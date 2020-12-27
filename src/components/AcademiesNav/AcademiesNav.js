import React, { useEffect } from "react";
import {Tab, Button, Icon} from "semantic-ui-react";
import history from "historyObj";

const panesTabs = profileType=>{
  return [
  {menuItem: "Overview", path: "/academies/list?page=1"},
  {menuItem: "Players", path: "/academies/players/list?myAcademy=true&page=1"},
  {menuItem: "Teams", path: "/academies/teams/list?page=1"},
  profileType=="coach"?{menuItem: "Training", path: "/academies/training/list?page=1"}:null,
  profileType?{menuItem: "My Calendar", path: "/academies/myCalendar"}:null,

].filter(v=>v);
}

const AcademiesNav = ({activeTab,profileType}) => {
  const panes = panesTabs(profileType)
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
