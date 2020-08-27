import "./Header.css";
import React from "react";
import { throttle } from "lodash";
import NavBar from "./Navbar";
import GoogleIOAuth from "../auth/GoogelOAuth";
import { withRouter } from "react-router-dom";
import { ReactComponent as Hamburger } from "../../assets/Hamburger.svg";
import SideDrawer from "../SideDrawer";
import { COMPANY_NAME } from "../../helpers/constants";
import { connect } from "react-redux";
import { setSmallWindow } from "../../store/actions";

class Header extends React.Component {
  state = {
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
    if (smallWindow ? !this.props.smallWindow : this.props.smallWindow) this.props.setSmallWindow(smallWindow);
  };

  toggleBurgerClick = () => this.setState(prevState => ({ showSideNav: !prevState.showSideNav }));

  render() {
    return (
      <>
        <div className="header">
          {this.props.smallWindow && (
            <div onClick={this.toggleBurgerClick} className="ham">
              <Hamburger />
            </div>
          )}
          <h1 className="companyLogo" onClick={() => this.props.history.push("/")}>
            {COMPANY_NAME}
          </h1>
          {!this.props.smallWindow && (
            <>
              <NavBar />
              <GoogleIOAuth />
            </>
          )}
        </div>
        {this.state.showSideNav && <SideDrawer toggleBurgerClick={this.toggleBurgerClick} />}
      </>
    );
  }
}

const mapState2Props = ({ windowSize: { smallWindow } }) => ({ smallWindow });
export default connect(mapState2Props, { setSmallWindow })(withRouter(Header));
