import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBaner from "./topBaner/TopBaner";
import InProgress from "./InProgress";
import Homepage from "./Homepage";

class OnjunoApp extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <BrowserRouter>
          <TopBaner />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path={["/company", "/learn", "/legal"]} component={InProgress} />
          </Switch>
          <footer className="footer">Copyright &copy;2020 Onjuno</footer>
        </BrowserRouter>
      </div>
    );
  }
}
export default OnjunoApp;
