import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTER } from "./consts";
import Home from "../components/Home";
import Users from "../components/Users";
import Services from "../components/Services";
import About from "../components/About";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTER.PATH} exact>
          <Home />
        </Route>
        <Route path={ROUTER.USER.PATH} component={Users} exact />
        <Route path={ROUTER.SERVICES} component={Services} />
        <Route
          path={ROUTER.ABOUT}
          component={() => {
            <About />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
