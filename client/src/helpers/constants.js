import INV1 from "../assets/inv1.png";
import INV2 from "../assets/inv2.png";
import INV3 from "../assets/inv3.png";

export const INVESTORS = [INV1, INV3, INV2];

export const navItems = ["Company", "Learn", "Legal"];
export const TOP_BANER_HEADING = "The Most Powerful Checking Account";
export const TOP_BANER_SUBHEADING =
  "Our checking account gives you higher returns than a savings account with no extra fees!";
export const TOP_BANER_SPOTS = " spots left for priority access";

export const INVESTORS_HEADER = "BACKED BY THE BEST";
export const INVESTORS_SUBHEADER = `We're trusted by the most valuable names out there`;

export const PURCHASE_HEADER = "Sign up early to save more!";
export const PURCHASE_DESCRIPTION = `Depending on the level of your checking account, you’ll earn between`;

export const DEPOSIT_RETURNS_TITLE = "Start saving for a rainy day fund";
export const DEPOSIT_RETURNS_HEADER = "Use Our Checking Account To Achieve Your Financial Goals";
export const DEPOSIT_RETURNS_SUBHEADER =
  "With the latest Federal rate cut, the largest banks are offering close to 0% APY on their checking and savings accounts. OnJuno checking will earn you more than 20x the national average*. Deposits up to $250,000 are FDIC insured through our partner bank. Grow your idle money faster with our checking account and start saving towards a rainy day fund, big expense, or vacation.";

export const REGISTRATION_HEADER = "Thank you for registering with us!";
export const REGISTRATION_CONTENT =
  "We have assigned a senior Relationship Manager to you. She will get in touch with you with the further instructions. All you now need to do is RELAX and leave the rest to us.";

export const COMPANY_NAME = "ONJUNO";
export const INPROGRESS_HEADER = "COMING SOON. STAY TUNED!";

export const CARD_DETAILS = {
  BASIC: {
    type: "BASIC",
    image: "https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-basic%403x.png",
    available: false,
    interest: 1.15,
    cashBack: "3%",
    totalSpots: 10000,
    spotsLeft: 10000,
    features: [
      "Free Debit Card",
      "1.15%<sup>3</sup> Bonus Rate Checking Account",
      "3% Cash back on brands you love",
      "Free Cash Withdrawals",
      "Phone & Chat Support"
    ],
    bonus: "Fund your account with a minimum opening deposit of <b>$0</b>.",
    fee: "No Membership Fee",
    subscription: "Free Forever!",
    savings: "",
    action: "Coming Soon"
  },
  METAL: {
    type: "METAL",
    image: "https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-black-card%403x.png",
    available: true,
    interest: 2.15,
    cashBack: "5%",
    totalSpots: 2500,
    spotsLeft: 333,
    features: [
      "Charcoal Black Metal Card",
      "2.15%<sup>1</sup> Bonus Rate Checking Account",
      "5% Cash back on brands you love",
      "Free Cash Withdrawals",
      "Phone & Chat Support"
    ],
    bonus:
      "Fund your account with a minimum opening deposit of <b>$1000</b>. 3 additional free ATM withdrawals per month from out of network ATMs.",
    fee: "$11.99/m Membership Fee",
    subscription: "Free for 6 months",
    savings: "$60 Savings",
    action: "Sign Up Now"
  },
  PREMIUM: {
    type: "PREMIUM",
    image: "https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-plus%403x.png",
    available: false,
    interest: 1.65,
    cashBack: "4%",
    totalSpots: 2000,
    spotsLeft: 2000,
    features: [
      "Free Debit Card",
      "1.65%<sup>2</sup> Bonus Rate Checking Account",
      "4% Cash back on brands you love",
      "Free Cash Withdrawals",
      "Phone & Chat Support"
    ],
    bonus:
      "Fund your account with a minimum opening deposit of <b>$500</b>. 2 additional free ATM withdrawals per month from out of network ATMs.",
    fee: "$6.99/m Membership Fee",
    subscription: "Coming Soon",
    savings: "",
    action: "Up Next"
  }
};
