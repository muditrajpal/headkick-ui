import React, {Component} from "react";
import NewsComponent from "./News";

export const Tabs = {
  ALL: "ALL",
  TEAMS: "TEAMS",
  LEAGUE_CUPS: "LEAGUE_CUPS",
  FIXTURES: "FIXTURES",
  RESULTS: "RESULTS",
  TRANSFERS: "TRANSFERS",
};

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: Tabs.ALL,
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
    return <NewsComponent state={this.state} toggleTabs={this.toggleTabs} />;
  }
}

export default News;
