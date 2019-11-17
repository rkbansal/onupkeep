import React from "react";
import { Switch, Route } from "react-router-dom";
import LeaderBoard from "../components/LeaderBoard/LeaderBoard";
import DashBoard from "../components/DashBoard";

const ReportRoute = () => {
  return (
    <Switch>
      <Route exact path="/reports" component={LeaderBoard}></Route>
      <Route path="/reports/dashboard" component={DashBoard}></Route>
    </Switch>
  );
};

export default ReportRoute;
