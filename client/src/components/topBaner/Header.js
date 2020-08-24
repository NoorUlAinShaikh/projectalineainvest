import "./Header.css";
import React from "react";
import { throttle } from "lodash";
import NavBar from "./Navbar";
import GoogleIOAuth from "../auth/GoogelOAuth";
import { withRouter } from "react-router-dom";
import { ReactComponent as Hamburger } from "../../assets/Hamburger.svg";
import SideDrawer from "../SideDrawer";
import { COMPANY_NAME } from "../../helpers/constants";

class Header extends React.Component {
  state = {
    smallWindow: false,
    showSideNav: false
  };

  componentDidMount() {
    this.handleWindowResize();

    window.addEventListener("resize", throttle(this.handleWindowResize, 300));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    const smallWindow = window.matchMedia("(max-width: 960px)").matches;
    if (smallWindow ? !this.state.smallWindow : this.state.smallWindow) this.setState({ smallWindow });
  };

  toggleBurgerClick = () => this.setState(prevState => ({ showSideNav: !prevState.showSideNav }));

  render() {
    return (
      <>
        <div className="header">
          {this.state.smallWindow && (
            <div onClick={this.toggleBurgerClick} className="ham">
              <Hamburger />
            </div>
          )}
          <h1 className="companyLogo" onClick={() => this.props.history.push("/")}>
            {COMPANY_NAME}
          </h1>
          {!this.state.smallWindow && <NavBar />}
          <div>
            <GoogleIOAuth />
          </div>
        </div>
        {this.state.showSideNav && <SideDrawer toggleBurgerClick={this.toggleBurgerClick} />}
      </>
    );
  }
}

export default withRouter(Header);
