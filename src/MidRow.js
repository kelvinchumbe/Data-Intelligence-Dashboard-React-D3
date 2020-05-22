import React from "react";
import Row from "./Row";
import "./styles.css";

function MidRow(props) {
  return (
    <div className="mid_row">
      <h5 style={{ fontSize: "18px", marginBottom: "20px" }}>
        Top Ten Countries
      </h5>
      <Row state={props.state} />
    </div>
  );
}

export default MidRow;
