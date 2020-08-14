import React from "react";
import {Route, Switch } from "react-router-dom";

import Home from "./Home";
import NotFound from "./NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
}