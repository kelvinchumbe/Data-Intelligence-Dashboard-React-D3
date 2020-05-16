import React from "react";
import Row from "./Row";
import "./styles.css";

function MidRow(props) {
  return (
    <div className="mid_row">
      <Row state={props.state} />
      {/* <Row state={props.state} /> */}
    </div>
  );
}

export default MidRow;
