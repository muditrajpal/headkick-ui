import React, { useState } from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import {
  footballIcon,
  academyIcon,
  hornIcon,
  eComIcon,
  socialIcon,
  oCochIcon,
  fantasyIcon,
} from "assets/svg";

const svgPathStyle=  { stroke: "white",fill:"transparent" };

const SidebarComponent = () => {
  const [collapse, setCollapse] = useState(false);

  const collapsedMenu = (
    <>
      <div className="title">
        <Icon name="bars" onClick={() => setCollapse(false)} />
      </div>
      <div className="sidebarMenu">
        <a>
          <Icon name="home" />
        </a>
        <a className="select">{footballIcon({},svgPathStyle)}</a>
        <a>{academyIcon({},svgPathStyle)}</a>
        <a>{hornIcon({},svgPathStyle)}</a>
        <a>{eComIcon({},svgPathStyle)}</a>
        <a> {socialIcon({},svgPathStyle)}</a>
        <a>{oCochIcon({},svgPathStyle)}</a>
        <a>{fantasyIcon({},svgPathStyle)}</a>
      </div>
    </>
  );
  const fullSizedMenu = (
    <>
      <div className="title">
        <Icon name="bars" onClick={() => setCollapse(true)} />

        <span>HEADKICK</span>
      </div>
      <div className="sidebarMenu">
        <a>
          <Icon name="home" />
          <span> Home</span>
        </a>
        <a className="select">
          <span className="svgIcon icon">
            {footballIcon({},svgPathStyle)}
          </span>
          <span> Tournament</span>
        </a>
        <a>
          <span className="svgIcon icon">
            {academyIcon({},svgPathStyle)}
          </span>
          <span> Academy</span>
        </a>
        <a>
          <span className="svgIcon icon">
            {hornIcon({},svgPathStyle)}
          </span>
          <span> Info & News</span>
        </a>
        <a>
          <span className="svgIcon icon">
            {eComIcon({}, svgPathStyle)}
          </span>{" "}
          <span> E-Commerce</span>
        </a>
        <a>
          <span className="svgIcon icon">
            {socialIcon({}, svgPathStyle)}
          </span>{" "}
          <span> Social Media</span>
        </a>
        <a>
          <span className="svgIcon icon">
            {oCochIcon({}, svgPathStyle)}
          </span>
          <span> Online coaching</span>
        </a>
        <a>
          <span className="svgIcon icon">
            {fantasyIcon({}, svgPathStyle)}
          </span>
          <span> Fantasy league</span>
        </a>
      </div>
    </>
  );
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      vertical
      visible
      className={`sidebar ${collapse ? "collapse" : ""}`}
      style={{
        overflowY: "hidden !important",
      }}
    >
      {!collapse ? fullSizedMenu : collapsedMenu}
    </Sidebar>
  );
};

export default SidebarComponent;
