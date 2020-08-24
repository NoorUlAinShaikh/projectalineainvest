import "./TopBaner.css";
import React from "react";
import CountUp from "react-countup";
import Header from "./Header";
import {
  TOP_BANER_HEADING,
  TOP_BANER_SUBHEADING,
  TOP_BANER_SPOTS,
  REGISTRATION_CONTENT,
  REGISTRATION_HEADER
} from "../../helpers/constants";
import USAFlagIcon from "../../assets/flagIcon.png";
import MobileApp from "../../assets/mobileApp.png";
import { InputAdornment, DialogContent, DialogActions, Dialog, TextField } from "@material-ui/core";

class TopBaner extends React.Component {
  state = {
    spotsCount: 2000,
    userEmail: "",
    showRegistrationSuccess: false
  };

  componentDidMount() {
    this.setState({ spotsCount: Math.floor(Math.random() * 2000) });
  }

  handleEmailChange = event => {
    this.setState({ userEmail: event.target.value });
  };

  handleEmailSubmit = () => {
    if (this.state.userEmail && this.validateEmail())
      if (!this.state.showRegistrationSuccess) this.setState({ showRegistrationSuccess: true });
  };

  validateEmail = () => this.state.userEmail.toLowerCase().includes(".com") && this.state.userEmail.includes("@");

  renderMobilePictorial = (imgStyle = "") => (
    <div className={`pictorial${imgStyle}`}>
      <img src={MobileApp} alt="JunoMobileApp" />
    </div>
  );

  handleRegistrationDialogClose = () => this.setState({ showRegistrationSuccess: false });

  renderRegistrationSuccessDialog = () => (
    <Dialog open={this.state.showRegistrationSuccess} keepMounted onClose={this.handleRegistrationDialogClose}>
      <DialogContent>
        <h1>{REGISTRATION_HEADER}</h1>
        <p>{REGISTRATION_CONTENT}</p>
      </DialogContent>
      <DialogActions>
        <button onClick={this.handleRegistrationDialogClose} className="registrationButton">
          Alright, Great!
        </button>
      </DialogActions>
    </Dialog>
  );

  renderEmailField = () => (
    <>
      <TextField
        style={{ width: "100%", margin: "2.5rem 0 1rem 0" }}
        id="outlined-textarea"
        label="Email Address"
        placeholder="Enter Your Email Address"
        variant="outlined"
        onChange={this.handleEmailChange}
        value={this.state.userEmail}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <button className="joinNowButton" onClick={this.handleEmailSubmit}>
                Join now
              </button>
            </InputAdornment>
          )
        }}
      />
      {this.renderRegistrationSuccessDialog()}
    </>
  );

  render() {
    return (
      <>
        <Header />
        <div className="topBaner">
          <div className="banerBody">
            <div className="welcomeText">
              <div className="punchInfo">
                <h1 style={{ fontSize: "xxx-large" }}>{TOP_BANER_HEADING}</h1>
                <h2 style={{ color: "#D7D7D7", fontSize: "x-large" }}>{TOP_BANER_SUBHEADING}</h2>
                {this.renderEmailField()}
                <div className="flex spots">
                  <img src={USAFlagIcon} alt="USAFLAG" />
                  <p>
                    <CountUp start={this.state.spotsCount} end={333} /> {TOP_BANER_SPOTS}
                  </p>
                </div>
              </div>
            </div>
            {this.renderMobilePictorial("Absolute")}
          </div>
        </div>
        {this.renderMobilePictorial()}
      </>
    );
  }
}

export default TopBaner;
