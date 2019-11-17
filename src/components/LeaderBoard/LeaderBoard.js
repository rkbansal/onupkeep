import React, { Component, Fragment } from "react";
import TimeLine from "./TimeLine";
import UserAssign from "./UserAssign";

export class LeaderBoard extends Component {
  render() {
    return (
      <Fragment>
        <TimeLine />
        <UserAssign />
      </Fragment>
    );
  }
}

export default LeaderBoard;
