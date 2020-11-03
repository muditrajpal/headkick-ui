import React, {Component} from "react";
import TeamsComponent from "./Teams";

export const Tabs = {
  TABLE_VIEW: "TABLE_VIEW",
  SQUAD_VIEW: "SQUAD_VIEW",
};

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing11: [],
      substitutes: [],
      reserves: [],
      selectedTab: Tabs.SQUAD_VIEW,
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
    return <TeamsComponent state={this.state} toggleTabs={this.toggleTabs} />;
  }
}

export default Teams;
