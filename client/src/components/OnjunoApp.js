import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import InProgress from "./InProgress";
import Homepage from "./Homepage";
import _404Page from "./_404Page";

class OnjunoApp extends React.Component {
  render() {
    return (
      <div className="OnjunoApp">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path={["/company", "/learn", "/legal"]} component={InProgress} />
              <Route component={_404Page} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default OnjunoApp;
