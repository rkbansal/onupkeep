import React, { Component } from "react";
import {
  LeaderBoardTimeLine,
  TimelineFolder,
  TimelineFolderDrop,
  ActiveDropField
} from "./style";
import arrow from "../../data/svg/arrow.svg";

export class TimeLine extends Component {
  state = {
    isActive: false
  };
  timelineDropDown = () => {
    this.setState({ isActive: true });
  };
  render() {
    return (
      <LeaderBoardTimeLine>
        <TimelineFolder>
          <p>Start</p>
          <p>Oct 16, 2019</p>
        </TimelineFolder>
        <img src={arrow} alt="->" />
        <TimelineFolder>
          <p>End</p>
          <p>Oct 25, 2019</p>
        </TimelineFolder>
        <hr></hr>
        <TimelineFolder>
          <p>Work Order Type</p>
          <TimelineFolderDrop onClick={this.timelineDropDown}>
            Reactive >
          </TimelineFolderDrop>
          {this.state.isActive ? (
            <ActiveDropField>
              <h1>skdjb</h1>
            </ActiveDropField>
          ) : null}
        </TimelineFolder>
        <div className="space"></div>
      </LeaderBoardTimeLine>
    );
  }
}

export default TimeLine;
