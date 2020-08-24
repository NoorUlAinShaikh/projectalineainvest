import "./SideDrawer.css";
import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import Navbar from "./topBaner/Navbar";
import { COMPANY_NAME } from "../helpers/constants";

const SideDrawer = ({ toggleBurgerClick }) => {
  const history = useHistory();

  const navigateHome = () => {
    toggleBurgerClick();
    history.push("/");
  };

  const renderSideDrawer = () => (
    <div className="backDrop" onClick={toggleBurgerClick}>
      <div className="sideDrawer" onClick={e => e.stopPropagation()}>
        <h1 className="companyLogo__SIDE" onClick={navigateHome}>
          {COMPANY_NAME}
        </h1>
        <Navbar drawer toggleBurgerClick={toggleBurgerClick} />
      </div>
    </div>
  );

  return ReactDOM.createPortal(renderSideDrawer(), document.getElementById("sideDrawer"));
};

export default SideDrawer;
