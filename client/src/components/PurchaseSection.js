import "./PurchaseSection.css";
import React from "react";
import { PURCHASE_HEADER, PURCHASE_DESCRIPTION } from "../helpers/constants";

const PurchaseSection = () => {
  const formatSuperscript = value => <sup>{value}</sup>;

  return (
    <section className="purchaseSection">
      <div className="purchaseContainer">
        <h1 style={{ fontSize: "xxx-large" }}>{PURCHASE_HEADER}</h1>
        <h2 style={{ color: "#D7D7D7", fontSize: "x-large" }}>
          {PURCHASE_DESCRIPTION} 1.15%{formatSuperscript("3")} to 2.15%{formatSuperscript("1")} bonus rate.
        </h2>
      </div>
      <div className=""></div>
    </section>
  );
};

export default PurchaseSection;
