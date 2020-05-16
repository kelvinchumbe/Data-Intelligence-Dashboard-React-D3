import React, { Component } from "react";
import * as d3 from "d3";
import Pagination from "./Pagination";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current_page: 1,
    };

    this.selectDisplayData = this.selectDisplayData.bind(this);
    this.drawTable = this.drawTable.bind(this);
  }

  componentDidMount() {
    console.log("Table Mounted");
    this.drawTable();
  }

  componentDidUpdate() {
    console.log("Table Updated");
    d3.selectAll("table").remove().exit();

    this.drawTable();
  }

  selectDisplayData(new_current_page, event) {
    this.setState({
      current_page: new_current_page,
    });
  }

  drawTable() {
    const dataTable = Object.keys(this.props.state.rawdata).map(
      (i) => this.props.state.rawdata[i]
    );

    const records_per_page = this.props.entries;
    const start = records_per_page * (this.state.current_page - 1);
    const end = records_per_page * this.state.current_page;
    const records_to_display = dataTable.slice(start, end);

    const total_records = dataTable.length;
    const total_pages = Math.ceil(total_records / records_per_page);

    const columns = [
      "Title",
      "Topic",
      "Year",
      "Intensity",
      "Sector",
      "Region",
      "Pestle",
    ];

    const table = d3.select(".bottom_row").append("table");

    table.attr("class", "table").style("border-collapse", "collapse");

    table
      .append("thead")
      .selectAll("th")
      .data(columns)
      .enter()
      .append("th")
      .text((col) => {
        return col;
      })
      .style("font-family", "Roboto")
      .style("font-size", "12px")
      .style("font-weight", "bold")
      .style("padding", "10px")
      .style("border", "2px solid #eee")
      .style("border-collapse", "collapse")
      .style("text-align", "left")
      .style("color", "#666666");

    table
      .append("tbody")
      .selectAll("tr")
      .data(records_to_display)
      .enter()
      .append("tr")
      .selectAll("td")
      .data((d) => {
        return columns.map((col) => {
          return d[col.toLowerCase()];
        });
      })
      .enter()
      .append("td")
      .text((d) => {
        return d;
      })
      .style("font-family", "Roboto")
      .style("font-size", "12px")
      .style("padding", "10px")
      .style("border", "2px solid #eee")
      .style("border-collapse", "collapse")
      .style("color", "#23527c");
  }

  searchTable() {
    d3.selectAll("tr");
  }

  render() {
    const dataTable = Object.keys(this.props.state.rawdata).map(
      (i) => this.props.state.rawdata[i]
    );

    const records_per_page = this.props.entries;
    const start = records_per_page * (this.state.current_page - 1);
    const end = records_per_page * this.state.current_page;
    const records_to_display = dataTable.slice(start, end);

    // const page_neighbours = 1;
    const total_records = dataTable.length;
    const total_pages = Math.ceil(total_records / records_per_page);

    const first_page = 1;
    const last_page = total_pages;

    return (
      <div>
        <div className="page_description">
          <p>
            Showing {start + 1} to {end} of {this.total_records} entries
          </p>
        </div>

        <Pagination
          total_pages={total_pages}
          first_page={first_page}
          last_page={last_page}
          current_page={this.state.current_page}
          selectDisplayData={this.selectDisplayData}
        />
      </div>
    );
  }
}

export default Table;
