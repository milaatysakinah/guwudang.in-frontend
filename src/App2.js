import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { APP_ROUTE } from "./routes";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import Main from "./pages/main2.js";
import Sidebar from "./pages/Sidebar/Sidebar3";
import Content from "./pages/Dashboard/Dashboard";

export const history = createBrowserHistory();

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          {APP_ROUTE.map((value, index) => {
            if (!value.private) {
              return (
                <PublicRoute
                  key={value.name}
                  restricted={value.restricted}
                  path={value.path}
                  component={value.component}
                  exact={value.exact}
                />
              );
            }
          })}
          <Route
            exact
            path={[
              "/",
              "/dashboard",
              "/product",
              "/accountPage",
              "/partner",
              "/detailProduct/*",
            ]}
          >
            <Main>
              <Switch>
                {APP_ROUTE.map((value, index) => {
                  if (value.private) {
                    return (
                      <PrivateRoute
                        key={value.name}
                        component={value.component}
                        path={value.path}
                        exact={value.exact}
                      />
                    );
                  }
                })}
              </Switch>
            </Main>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
