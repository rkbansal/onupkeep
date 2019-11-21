import React, { Component, Fragment } from "react";
import ReportRoute from "../routes/ReportRoute";

import { ReportNav, ReportItems, AddReport } from "./style";
import { withRouter } from "react-router-dom";

const arr = ["Leaderboard", "Dashboard", "Ratings"];

export class Reports extends Component {
  state = {
    active: "Leaderboard"
  };

  onClick = val => {
    this.setState({ active: val });

    switch (val) {
      case "Leaderboard":
        return this.props.history.push({
          pathname: "/reports",
          state: { detail: "Reports" }
        });

      case "Dashboard":
        return this.props.history.push({
          pathname: "/reports/dashboard",
          state: { detail: "Reports" }
        });

      case "Ratings":
        return this.props.history.push({
          pathname: "/reports/ratings",
          state: { detail: "Reports" }
        });

      default:
        return this.props.history.push({
          pathname: "/reports",
          state: { detail: "Reports" }
        });
    }
  };
  render() {
    return (
      <Fragment>
        <ReportNav>
          {arr.map(item => (
            <ReportItems
              key={item}
              onClick={() => this.onClick(item)}
              active={this.state.active}
              item={item}
            >
              {item}
            </ReportItems>
          ))}
          <div className="space"></div>
          <AddReport>+</AddReport>
        </ReportNav>
        <ReportRoute />
      </Fragment>
    );
  }
}

export default withRouter(Reports);
