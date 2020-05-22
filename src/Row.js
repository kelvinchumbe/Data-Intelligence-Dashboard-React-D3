import React from "react";
import Country from "./Country";
import "./styles.css";

function Row(props) {
  const array = Object.keys(props.state.rawdata).map(
    (i) => props.state.rawdata[i]
  );

  function sortByProperty(property, country) {
    return function (a, b) {
      if (a[property] > b[property] && a[country] !== "") return -1;
      else if (a[property] < b[property] && a[country] !== "") return 1;

      return 0;
    };
  }

  const sortedObj = array.sort(sortByProperty("intensity", "country"));

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
