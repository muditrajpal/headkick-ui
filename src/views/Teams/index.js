import React, {Component} from "react";
import TeamsComponent from "./Teams";
import {playing11, substitutes, reserves} from "services/teams/tableView/mock";

export const Tabs = {
  TABLE_VIEW: "TABLE_VIEW",
  SQUAD_VIEW: "SQUAD_VIEW",
};

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing11: playing11,
      substitutes: substitutes,
      reserves: reserves,
      selectedTab: Tabs.TABLE_VIEW,
    };
  }

  /**
   * Toggels tab selection
   * @param {*} tabName
   */
  toggleTabs = (tabName) => {
    if (!tabName) return;
    this.setState({selectedTab: tabName});
  };

  render() {
    return <TeamsComponent {...this.props} state={this.state} toggleTabs={this.toggleTabs} />;
  }
}

export default Teams;
