import React, { Component } from "react";
import "./styles.css";
import Table from "./Table";

class BottomRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: "10",
      search: "",
    };

    this.getFormInput = this.getFormInput.bind(this);
  }

  getFormInput(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    event.preventDefault();
  }

  render() {
    return (
      <div className="bottom_row">
        <form>
          <label>Show</label>
          <select
            value={this.state.entries}
            name="entries"
            onChange={this.getFormInput}
            className="entries"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <label>entries</label>

          <div className="searchdiv">
            <label>Search</label>
            <input
              className="search"
              type="text"
              name="search"
              onChange={this.getFormInput}
            />
          </div>
        </form>

        <div className="dataTable">
          <Table
            state={this.props.state}
            entries={this.state.entries}
            search={this.state.search}
          />
        </div>
      </div>
    );
  }
}

export default BottomRow;
