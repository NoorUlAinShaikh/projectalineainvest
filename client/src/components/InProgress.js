import "./InProgress.css";
import React from "react";
import { INPROGRESS_HEADER } from "../helpers/constants";

class InProgress extends React.Component {
  constructor(props) {
    super(props);
    this.sectionRef = React.createRef();
  }
  componentDidMount() {
    if (this.sectionRef) this.sectionRef.current.scrollIntoView();
  }

  render() {
    return (
      <section className="inprogressSection" ref={this.sectionRef}>
        <div className="inprogressContainer">
          <h1 className="inprogressHeader" style={{ letterSpacing: "2px" }}>
            {INPROGRESS_HEADER}
          </h1>
        </div>
      </section>
    );
  }
}

export default InProgress;
