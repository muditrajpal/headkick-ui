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
import { Link } from "react-router-dom";

const svgPathStyle = { stroke: "white", fill: "transparent" };

const activeTab = (pathname) => {
  switch (true) {
    case pathname.indexOf("/tournament/guest") == 0:
      return "tournament_guest";
    case pathname.indexOf("/tournament") == 0:
      return "tournament";
    case pathname.indexOf("/academies") == 0:
      return "academy";
    case pathname.indexOf("/information-and-news") == 0:
      return "information-and-news";
    case pathname.indexOf("/online-coaching") == 0:
      return "online-coaching";

    // case pathname == "/":
    default:
      return "home";
  }
};

const SidebarComponent = (props) => {
  const [collapse, setCollapse] = useState(false);
  const active = activeTab(props.location.pathname);
  const collapsedMenu = (
    <>
      <div className="title">
        <Icon name="bars" onClick={() => setCollapse(false)} />
      </div>
      <div className="sidebarMenu">
        <Link className={active == "home" ? "select" : ""}>
          <Icon name="home" />
        </Link>
        <Link className={active == "tournament" ? "select" : ""}>
          {footballIcon({}, svgPathStyle)}
        </Link>
        <Link className={active == "academy" ? "select" : ""} to="/academies">
          {academyIcon({}, svgPathStyle)}
        </Link>
        <a>{hornIcon({}, svgPathStyle)}</a>
        <a>{eComIcon({}, svgPathStyle)}</a>
        <a> {socialIcon({}, svgPathStyle)}</a>
        <a>{oCochIcon({}, svgPathStyle)}</a>
        <a>{fantasyIcon({}, svgPathStyle)}</a>
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
        <Link className={active == "home" ? "select" : ""}>
          <Icon name="home" />
          <span> Home</span>
        </Link>
        <Link
          className={active == "tournament" ? "select" : ""}
          to="/tournament"
        >
          <span className="svgIcon icon">{footballIcon({}, svgPathStyle)}</span>
          <span> Tournament</span>
        </Link>
        <Link
          className={active == "tournament_guest" ? "select" : ""}
          to="/tournament/guest"
        >
          <span className="svgIcon icon">{footballIcon({}, svgPathStyle)}</span>
          <span>Tournament Guest</span>
        </Link>
        <Link className={active == "academy" ? "select" : ""} to="/academies">
          <span className="svgIcon icon">{academyIcon({}, svgPathStyle)}</span>
          <span> Academy</span>
        </Link>
        <Link
          className={active == "information-and-news" ? "select" : ""}
          to="/information-and-news"
        >
          <span className="svgIcon icon">{hornIcon({}, svgPathStyle)}</span>
          <span> Info & News</span>
        </Link>
        <a>
          <span className="svgIcon icon">{eComIcon({}, svgPathStyle)}</span>{" "}
          <span> E-Commerce</span>
        </a>
        <a>
          <span className="svgIcon icon">{socialIcon({}, svgPathStyle)}</span>{" "}
          <span> Social Media</span>
        </a>
        <Link
          className={active == "online-coaching" ? "select" : ""}
          to="/online-coaching"
        >
          <span className="svgIcon icon">{oCochIcon({}, svgPathStyle)}</span>
          <span> Online coaching</span>
        </Link>
        <a>
          <span className="svgIcon icon">{fantasyIcon({}, svgPathStyle)}</span>
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
