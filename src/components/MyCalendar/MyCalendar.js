import React from "react";
import { Dropdown, Icon, Segment } from "semantic-ui-react";
import teamLogo from "assets/imgs/w.png";
import maskGroup from "assets/imgs/maskGroup.png";

const options = [
  {
    key: "today",
    text: "today",
    value: "today",
    content: "Today",
  },
  {
    key: "this week",
    text: "this week",
    value: "this week",
    content: "This Week",
  },
  {
    key: "this month",
    text: "this month",
    value: "this month",
    content: "This Month",
  },
];

const myEventsList = [];

const Item = () => (
  <div className="item">
    <div className="date">
      <div className="top">
        <div>10</div>
        <div className="sub">Sept</div>
      </div>
    </div>
    <div className="matches">
      <div className="matchItem">
        <div className="leftTab">
          <img src={maskGroup} />
          <span>LaLiGa</span>
        </div>{" "}
        <span className="sub">Kingborough Lions United FC</span>
        <img src={teamLogo} />
        <span className="vs">VS</span>
        <img src={teamLogo} />
        <span className="sub">Wanderers F.C.</span>
      </div>
      <div className="matchItem">
        <div className="leftTab">
          <img src={maskGroup} />
          <span>LaLiGa</span>
        </div>
        <span className="sub">Kingborough Lions United FC</span>
        <img src={teamLogo} />
        <span className="vs-block">
          <span>1</span>
          <span className="dark">2</span>
        </span>
        <img src={teamLogo} />
        <span className="sub">Wanderers F.C.</span>
      </div>
    </div>
  </div>
);

const MyCalendar = (props) => (
  <div className="myCalendarItemComponent">
    <div className="toolbar">
      <Dropdown
        inline
        text={
          <div className="calendarMonth">
            <Icon name="triangle left" />
            September
            <Icon name="triangle right" />
          </div>
        }
        options={options}
        icon={null}
        className="float-left"
        value={options[0].value}
      />
      <Dropdown
        inline
        text={
          <div className="calendarMonth">
            2020
            <Icon name="triangle down" />
          </div>
        }
        options={options}
        icon={null}
        className="calendarYear"
        value={options[0].value}
      />
    </div>
    <div>
      <div className="columnItem right">
        <div className="list">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  </div>
);

export default MyCalendar;
