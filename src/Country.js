import React from "react";
import "./styles.css";
import * as d3 from "d3";
import { color } from "d3";

function mapRelevance(relevance_val) {
  console.log(typeof relevance_val);
  var relevance = "";

  if (typeof relevance_val === "undefined") {
    relevance_val = 1;
  }

  switch (relevance_val) {
    case 1:
      relevance = "Vague";
      break;
    case 2:
      relevance = "Early Stage";
      break;
    case 3:
      relevance = "Gaining Traction";
      break;
    case 4:
      relevance = "Evolving";
      break;
    case 5:
      relevance = "Established";
      break;
    case 6:
      relevance = "Expansionary";
      break;
    case 7:
      relevance = "Growing";
      break;
    default:
      relevance = "";
  }

  return relevance;
}

function mapLikelihood(likelihood_val) {
  var likelihood = "";

  if (typeof likelihood_val === "undefined") {
    likelihood_val = 1;
  }

  switch (likelihood_val) {
    case 1:
      likelihood = "Potential";
      break;
    case 2:
      likelihood = "Possible";
      break;
    case 3:
      likelihood = "Probable";
      break;
    case 4:
      likelihood = "Business as Usual";
      break;

    default:
      likelihood = "";
      break;
  }

  return likelihood;
}

function decideFontColor(index) {
  var color = "";

  switch ((index + 1) % 5) {
    case 1:
      color = "#71b6f9";
      break;
    case 2:
      color = "#ff8acc";
      break;
    case 3:
      color = "#f9c851";
      break;
    case 4:
      color = "#35b8e0";
      break;
    case 0:
      color = "#35b8e0";
      break;

    default:
      break;
  }

  return color;
}

function Country(props) {
  return (
    <div className="countries">
      <h4 style={{ color: decideFontColor(props.index) }}>
        {props.data.country}
      </h4>
      <h5>
        {props.data.intensity +
          " | " +
          mapRelevance(props.data.relevance) +
          " | " +
          mapLikelihood(props.data.likelihood) +
          " | " +
          props.data.start_year}
      </h5>

      {/* {updateFontColor(props.index)} */}

      <div></div>
    </div>
  );
}

export default Country;
