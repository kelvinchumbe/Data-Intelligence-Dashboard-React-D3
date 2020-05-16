import React from "react";
import "./styles.css";
import * as d3 from "d3";

function updateFontColor(index) {
  //   if ((index + 1) % 5 === 1) {
  //     d3.select(".countries:nth-child(" + index + 1 + ")")
  //       .select("h4")
  //       .style("color", "#71b6f9");
  //   } else if ((index + 1) % 5 === 2) {
  //     d3.select(".countries").select("h4").style("color", "#ff8acc");
  //   } else if ((index + 1) % 5 === 3) {
  //     d3.select(".countries:nth-child(" + index + 1 + ")")
  //       .select("h4")
  //       .style("color", "#f9c851");
  //   } else if ((index + 1) % 5 === 4) {
  //     d3.select(".countries").select("h4").style("color", "#35b8e0");
  //   } else if ((index + 1) % 5 === 0) {
  //     d3.select(".countries").select("h4").style("color", "#35b8e0");
  //   }
  // }
}

function Country(props) {
  return (
    <div className="countries">
      {}
      <h4>{props.data.country}</h4>
      <h5>
        {props.data.intensity +
          "|" +
          props.data.relevance +
          "|" +
          props.data.likelihood +
          "|" +
          props.data.start_year}
      </h5>

      {/* {updateFontColor(props.index)} */}

      <div></div>
    </div>
  );
}

export default Country;
