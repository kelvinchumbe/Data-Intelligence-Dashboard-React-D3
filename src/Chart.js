import React, { Component } from "react";
import * as d3 from "d3";
import Node from "./Node";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.drawHeatMap = this.drawHeatMap.bind(this);
    this.mapLikelihood = this.mapLikelihood.bind(this);
    this.mapRelevance = this.mapRelevance.bind(this);
  }

  componentDidMount() {
    console.log("Chart Mounted");
    this.drawHeatMap();
  }

  componentDidUpdate(prevProps, prevState) {
    // if(prevState.horizontal_axis !== this.selectAll ){

    // }

    d3.selectAll("svg").remove().exit();
    console.log("Chart Updated");

    this.drawHeatMap();
  }

  mapRelevance(relevance_val) {
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

  mapLikelihood(likelihood_val) {
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

  drawHeatMap() {
    const itemSize = 22,
      cellSize = itemSize - 1,
      margin = { top: 150, right: 20, bottom: 20, left: 180 };

    const width = 1500 - margin.right - margin.left,
      height = 600 - margin.top - margin.bottom;

    const data = Object.keys(this.props.state.rawdata).map(
      (i) => this.props.state.rawdata[i]
    );

    const div = d3
      .select(".chart_area")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "1px solid black")
      .style("font-size", "12px")
      .style("font-family", "Roboto")
      .style("padding", "3px");

    const arr1 = data.map((item) => {
      if (item.country !== "") {
        return item[this.props.state.horizontal_axis];
      }
      return;
    });

    const arr2 = data.map((item) => {
      if (item.sector !== "") {
        return item[this.props.state.vertical_axis];
      }
      return;
    });

    const x_elements = d3.set(arr1).values(),
      y_elements = d3.set(arr2).values();

    const xScale = d3
      .scaleBand()
      .domain(x_elements)
      .range([0, x_elements.length * itemSize]);

    const xAxis = d3
      .axisTop()
      .scale(xScale)
      .tickFormat(function (d) {
        return d;
      });

    const yScale = d3
      .scaleBand()
      .domain(y_elements)
      .range([0, y_elements.length * itemSize]);

    const yAxis = d3
      .axisLeft()
      .scale(yScale)
      .tickFormat(function (d) {
        return d;
      });

    const colorScale = d3
      .scaleOrdinal()
      .domain([15, 40, 50])
      .range(["#64B5F6", "#64DD17", "#BF360C"]);

    const svg = d3
      .select(".chart_area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("g")
      .append("rect")
      .attr("class", "cell")
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("id", "heatmapChart")
      .attr("y", (d) => {
        return yScale(d[this.props.state.vertical_axis]);
      })
      .attr("x", (d) => {
        return xScale(d[this.props.state.horizontal_axis]);
      })
      .attr("fill", function (d) {
        return colorScale(d.intensity);
      })
      .on("mouseover", (d) => {
        div
          .transition()
          .duration(50)
          .style("opacity", 1)
          .style("left", d3.event.pageX - 30 + "px")
          .style("top", d3.event.pageY - 70 + "px");
        div.html(
          d.intensity +
            "|" +
            d[this.props.state.horizontal_axis] +
            "|" +
            d[this.props.state.vertical_axis]
        );
      })
      .on("mouseout", (d) => {
        div.transition().duration(500).style("opacity", 0);
      })
      .on("click", (d) => {
        d3.select(".node").html("").style("text-align", "center");

        d3.select(".node")
          .append("h3")
          .html(d[this.props.state.horizontal_axis])
          .select("h3")

          .style("font-size", "24px")
          .style("font-family", "Karla");

        d3.select(".node")
          .append("p")
          .html(
            d.intensity +
              " | " +
              this.mapRelevance(d.relevance) +
              " | " +
              this.mapLikelihood(d.likelihood)
          )
          .style("font-size", "14px")
          .style("font-family", "Roboto")
          .style("color", "#797979");

        d3.select(".node")
          .append("a")
          .attr("xlink:href", d.url)
          .html(
            "<a style='color: #23527c; text-decoration: none;' href=" +
              d.url +
              " target='_blank'>" +
              d.title +
              "</a>"
          )
          .style("font-size", "14px")
          .style("font-family", "Roboto")
          .style("align", "left");
      });

    svg
      .append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .selectAll("text")
      .attr("font-weight", "normal");

    svg
      .append("g")
      .attr("class", "x axis")
      .call(xAxis)
      .selectAll("text")
      .attr("font-weight", "normal")
      .style("text-anchor", "start")
      .attr("dx", ".8em")
      .attr("dy", ".5em")
      .attr("transform", function (d) {
        return "rotate(-65)";
      });
  }

  render() {
    return <div></div>;
  }
}

export default Chart;
