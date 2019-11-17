import React from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Reports from "../components/Reports";
import WorkOrder from "../components/WorkOrder";
import { RouteContainer } from "./style";

const RightPanelRoute = () => {
  return (
    <RouteContainer>
      <Switch>
        <Route exact path="/" component={WorkOrder}></Route>
        <Route path="/reports" component={Reports}></Route>
      </Switch>
    </RouteContainer>
  );
};

export default withRouter(RightPanelRoute);
