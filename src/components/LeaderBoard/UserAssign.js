import React, { Component } from "react";
import Line from '../charts/Line';
import {
  UserAssignDiv,
  UserAssignHeader,
  UserAssignContainer,
  UserDetailsDiv
} from "./style";

export class UserAssign extends Component {
  render() {
    return (
      <UserAssignDiv>
        <UserAssignHeader>User Assigned</UserAssignHeader>
        <UserAssignContainer>
          <UserDetailsDiv>
            <Line title={"User WO Stats"} data={[40, 23, 70, 80, 81, 56, 55, 40, 59, 40, 23, 70, 80, 81, 56, 55, 40]}/>
          </UserDetailsDiv>
          <UserDetailsDiv>
            <Line title={"User WO Graph"} data={[65, 59, 80, 81, 56, 55, 40]}/>
          </UserDetailsDiv>
        </UserAssignContainer>
      </UserAssignDiv>
    );
  }
}

export default UserAssign;
