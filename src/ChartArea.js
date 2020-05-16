import React from "react";
import "./styles.css";
import Chart from "./Chart";

function ChartArea(props) {
  const style = {
    padding: 50,
    color: "#505458",
    textAlign: "center",
    fontFamily: "Karla",
  };
  return (
    <div className="chart_area">
      {props.state.isLoading ? (
        <div style={style}>
          <img
            src="https://www.blackcoffer.info/ops/st/heatmap/assets/images/loader.gif"
            alt=""
          />
          <p>
            I make many calculations here and then render them as year ranges,
            filters, and selector options. Thanks for your patience while I
            prepare your graphic, Athena
          </p>
        </div>
      ) : (
        <Chart state={props.state} />
      )}
    </div>
  );
}

export default ChartArea;
