import "./Homepage.css";
import React from "react";
import { Grid } from "@material-ui/core";
import PurchaseSection from "./PurchaseSection";
import {
  INVESTORS,
  INVESTORS_SUBHEADER,
  INVESTORS_HEADER,
  DEPOSIT_RETURNS_TITLE,
  DEPOSIT_RETURNS_HEADER,
  DEPOSIT_RETURNS_SUBHEADER
} from "../helpers/constants";
import { ReactComponent as Deposits } from "../assets/Deposits.svg";

class Homepage extends React.Component {
  renderInvestorsShowCase = () => {
    return INVESTORS.map((investor, index) => (
      <Grid item sm={12} md={4} key={index} className="showCraftInvestor">
        <img className="showCraft1InvestorImg" src={investor} alt={`investor${index}`} />
      </Grid>
    ));
  };

  renderDepositsReturnsSection = () => {
    return (
      <section className="depositReturnsSection">
        <Grid container justify="space-around" alignItems="center" style={{ padding: "2rem" }}>
          <Grid item sm={11} md={6}>
            <Grid container alignItems="flex-start" direction="column" className="depositsTextContainer">
              <Grid item sm={12} className="depositsTitle">
                {DEPOSIT_RETURNS_TITLE}
              </Grid>
              <Grid item sm={12} className="depositsHeader">
                {DEPOSIT_RETURNS_HEADER}
              </Grid>
              <Grid item sm={12} className="depositsSubheader">
                {DEPOSIT_RETURNS_SUBHEADER}
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={11} md={6} style={{ textAlign: "center" }}>
            <Deposits style={{ width: "90%", marginLeft: "2rem" }} />
          </Grid>
        </Grid>
      </section>
    );
  };

  renderInvestorsSection = () => {
    return (
      <section className="investorsSection">
        <div className="investorsContainer">
          <h1 className="investorsHeader" style={{ letterSpacing: "2px" }}>
            {INVESTORS_HEADER}
          </h1>
          <h2 className="investorsSubHeader">{INVESTORS_SUBHEADER}</h2>
          <Grid container alignItems="center" justify="space-between" className="investorsShowcase">
            {this.renderInvestorsShowCase()}
          </Grid>
        </div>
      </section>
    );
  };

  render() {
    return (
      <>
        {this.renderDepositsReturnsSection()}
        {this.renderInvestorsSection()}
        <PurchaseSection />
      </>
    );
  }
}

export default Homepage;
