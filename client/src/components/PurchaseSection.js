import "./PurchaseSection.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import CountUp from "react-countup";
import { PURCHASE_HEADER, PURCHASE_DESCRIPTION, CARD_DETAILS } from "../helpers/constants";
import { ReactComponent as FeatureIcon } from "../assets/FeatureIcon.svg";
import { ReactComponent as Dollar } from "../assets/Dollar.svg";

const PurchaseSection = () => {
  const [activatedCard, setActivatedCard] = useState("");
  const [cards2Show, setCards2Show] = useState(null);

  const smallWindow = useSelector(({ windowSize }) => windowSize.smallWindow);

  useEffect(() => {
    let cards = Object.values(CARD_DETAILS);
    let filteredCards = activatedCard ? cards.filter(({ type }) => type === activatedCard) : cards;
    if (filteredCards.length > 0) setCards2Show(filteredCards);
  }, [activatedCard]);

  useEffect(() => {
    if (!activatedCard && smallWindow) setActivatedCard("METAL");
    if (!smallWindow) setActivatedCard("");
  }, [smallWindow]);

  const handleCardSelection = e => setActivatedCard(e.target.getAttribute("tag"));

  const formatSuperscript = value => <sup style={{ opacity: "0.5" }}>{value}</sup>;

  const renderCardTop = (card, index) => (
    <>
      <div className="top">
        <img className="cardImage" src={card.image} alt={card.type} />
        <div className={`topDetails`}>
          <div className={`cardtype`}>{card.type}</div>
          <div className={`cardInterest${!card.available ? " opacity04" : ""}`}>
            <CountUp start={0} end={card.interest} delay={0.5} decimals={2} />%{formatSuperscript(index + 1)}
          </div>
          <div className={`cardCashback${!card.available ? " opacity04" : ""}`}>{`${card.cashBack} cash back`}</div>
        </div>
        <div className="cardSignUpContainer">
          <div className="topSpotsLeft">{card.spotsLeft} spots left</div>
          <progress
            style={{
              borderRadius: "3px",
              height: "0.6rem",
              width: "-webkit-fill-available"
            }}
            max={card.totalSpots}
            value={card.totalSpots - card.spotsLeft}
          />
          <button
            disabled={!card.available}
            className={`cardSignUp${!card.available ? " opacity04" : ""}`}
            onClick={() => window.scroll(0, 0)}
          >
            {card.action}
          </button>
        </div>
      </div>
      <hr className="divider" />
    </>
  );

  const renderCardBody = (features, bonus) => (
    <>
      <div className="body">
        <div className="bodyHeader">INCLUDES</div>
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <div className="featureIcon">
              <FeatureIcon />
            </div>
            <div className="featureContent"> {ReactHtmlParser(feature)}</div>
          </div>
        ))}
        <div className="bonus">{ReactHtmlParser(bonus)}</div>
      </div>
      <hr className="divider" />
    </>
  );

  const renderCardBottom = (fee, subscription, savings, available) => (
    <div className={`bottom${!available ? " opacity04" : ""}`}>
      <div className="dollar">
        <Dollar />
      </div>
      <div className="bottomContent">
        <div className="fee">{fee}</div>
        <div className="subscription">{subscription}</div>
        <div className="savings">{savings}</div>
      </div>
    </div>
  );

  const renderCards = () => {
    return cards2Show.map((card, index) => (
      <div className={`card${card.available ? " available" : ""}`} key={card.type}>
        {renderCardTop(card, index)}
        {renderCardBody(card.features, card.bonus)}
        {renderCardBottom(card.fee, card.subscription, card.savings, card.available)}
      </div>
    ));
  };

  const renderCardsContainer = () => (
    <div className="flex purchaseCardsContainer">
      <div className="hide cardTypesContainer">
        {Object.keys(CARD_DETAILS).map(card => (
          <div
            key={card}
            className={`cardType${card === activatedCard ? " active" : ""}`}
            onClick={handleCardSelection}
            tag={card}
          >
            {card}
          </div>
        ))}
      </div>
      <div className="flex cardsContainer">{cards2Show && renderCards()}</div>
    </div>
  );

  return (
    <section className="purchaseSection">
      <div className="flex purchaseContainer">
        <h1 style={{ fontSize: "xxx-large" }}>{PURCHASE_HEADER}</h1>
        <h2 className="purchase_description">
          {PURCHASE_DESCRIPTION} 1.15%{formatSuperscript("3")} to 2.15%{formatSuperscript("1")} bonus rate.
        </h2>
      </div>
      {renderCardsContainer()}
    </section>
  );
};

export default PurchaseSection;
