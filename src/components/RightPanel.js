import React, { Component } from "react";
import { RightPanelDiv, TopNav, MenuIcon, RightPanelIcon } from "./style";
import RightPanelRoute from "../routes/RightPanelRoute";
import { withRouter } from "react-router-dom";
import menu from "../data/svg/menu.svg";
import reports from "../data/svg/reports.svg";
import notification from "../data/svg/notification.svg";
import user from "../data/svg/user.svg";

export class RightPanel extends Component {
  onClick = () => {
    this.props.setState(true);
  };
  render() {
    return (
      <RightPanelDiv>
        <TopNav>
          <MenuIcon src={menu} alt="logo" onClick={this.onClick} />
          <h3>
            {this.props.location.state && this.props.location.state.detail}
          </h3>
          <div className="space"></div>
          <RightPanelIcon src={reports} alt="logo" onClick={this.onClick} />
          <RightPanelIcon
            src={notification}
            alt="logo"
            onClick={this.onClick}
          />
          <RightPanelIcon src={user} alt="logo" onClick={this.onClick} />
        </TopNav>
        <RightPanelRoute />
      </RightPanelDiv>
    );
  }
}

export default withRouter(RightPanel);
