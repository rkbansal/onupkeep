import React, { Component } from "react";
import {DashBoardWrapper, FlexRowWrapper} from './style';
import Card from "./Card";

export class DashBoard extends Component {
  render() {
    return (
      <DashBoardWrapper>
        <h1>DashBoard</h1>
        <Card />
        <FlexRowWrapper>
          <Card />
          <Card />
        </FlexRowWrapper>
        <FlexRowWrapper>
          <Card />
          <Card />
        </FlexRowWrapper>
      </DashBoardWrapper>
    );
  }
}

export default DashBoard;
