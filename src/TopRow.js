import React from "react";
import ChartArea from "./ChartArea";
import FiltersSect from "./FiltersSect";
import "./styles.css";

function TopRow(props) {
  return (
    <div className="top_row">
      <ChartArea state={props.state} />
      <FiltersSect state={props.state} getFormInput={props.getFormInput} />
    </div>
  );
}

export default TopRow;
