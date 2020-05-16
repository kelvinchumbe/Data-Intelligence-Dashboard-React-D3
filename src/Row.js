import React from "react";
import Country from "./Country";
import "./styles.css";

function Row(props) {
  const array = Object.keys(props.state.rawdata).map(
    (i) => props.state.rawdata[i]
  );

  function sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property]) return -1;
      else if (a[property] > b[property]) return 1;

      return 0;
    };
  }

  const sortedObj = array.sort(sortByProperty("intensity"));

  return (
    <div className="rows">
      {props.state.isLoading
        ? "Loading"
        : sortedObj.slice(0, 10).map((item, i) => {
            return <Country data={item} index={i} key={i} />;
          })}

      {}
    </div>
  );
}

export default Row;
