import React, { Component, Fragment } from "react";
import TimeLine from "./TimeLine";
import UserAssign from "./UserAssign";
import {LeaderBoardDiv }from './style'

export class LeaderBoard extends Component {
  render() {
    return (
      <LeaderBoardDiv>
        <TimeLine />
        <UserAssign />
      </LeaderBoardDiv>
    );
  }
}

export default LeaderBoard;
