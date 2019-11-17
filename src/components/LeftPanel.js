import React, { Component } from "react";
import {
  LeftPanelDiv,
  FlexDiv,
  Logo,
  LogoIcon,
  LeftStroke,
  TransparentSection
} from "./style";
import { withRouter } from "react-router-dom";
import settings from "../data/svg/settings.svg";

const arr = ["Work Orders", "Reports", "Requests", "Shared Work Orders"];

const routes = [
  { key: "Work Orders", path: "/" },
  { key: "Reports", path: "/reports" },
  { key: "Requests", path: "/requests" },
  { key: "Shared Work Orders", path: "/shared-work-orders" }
];

export class LeftPanel extends Component {
  state = {
    activeStroke: "Work Orders"
  };

  componentDidMount() {
    // this.props.history.push(window.location.pathname);
    const activeRoute = routes.filter(route => {
      console.log(route.path.split("/"));

      if (route.path.split("/")[1] === window.location.pathname.split("/")[1]) {
        return route;
      }
    });
    if (activeRoute) {
      console.log("activeRoute", activeRoute);

      this.setState({
        activeStroke: activeRoute[0].key
      });
    }
  }

  onClick = val => {
    this.setState({ activeStroke: val });
    this.props.setState(false);
    switch (val) {
      case "Work Orders":
        return this.props.history.push({
          pathname: "/",
          state: { detail: "Work Orders" }
        });

      case "Reports":
        return this.props.history.push({
          pathname: "/reports",
          state: { detail: "Reports" }
        });

      case "Requests":
        return this.props.history.push({
          pathname: "/requests",
          state: { detail: "Requests" }
        });

      case "Shared Work Orders":
        return this.props.history.push({
          pathname: "/shared-work-orders",
          state: { detail: "Shared Work Orders" }
        });

      default:
        return this.props.history.push({
          pathname: "/",
          state: { detail: "Work Orders" }
        });
    }
  };

  handleLeftPanel = () => {
    this.props.setState(false);
  };
  logoClicked = () => {
    this.props.setState(false);
    this.props.history.push("/");
  };
  render() {
    return (
      <LeftPanelDiv state={this.props.state}>
        <FlexDiv>
          <Logo onClick={this.logoClicked}>
            <LogoIcon src={settings} alt="logo" onClick={this.onClick} />
            <h2>UpKeep</h2>
          </Logo>
          {arr.map(item => (
            <LeftStroke
              key={item}
              item={item}
              onClick={() => this.onClick(item)}
              activeStroke={this.state.activeStroke}
            >
              {item}
            </LeftStroke>
          ))}
        </FlexDiv>
        <TransparentSection onClick={this.handleLeftPanel}></TransparentSection>
      </LeftPanelDiv>
    );
  }
}

export default withRouter(LeftPanel);
