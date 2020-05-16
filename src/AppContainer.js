import React, { Component } from "react";
import App from "./App";
import jsonData from "./data_assets/jsondata.json";

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      // json data loaded from the json data file and modified to be an object of objects {string : array}
      data: [],
      // raw unmodified json data
      rawdata: {},
      // keeps track of all form data updates
      isYearRange: "",
      horizontal_axis: "",
      vertical_axis: "",
      topic: "",
      pestle: "",
      city: "",
      measures: "",
      confidence: "",
      swot: "",
      axisCategories: [],
      // keeps track of data loading to the app
      isLoading: null,
    };

    this.getFormInput = this.getFormInput.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("http://localhost:3000/jsondata.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newdata = {};

        Object.keys(data[0]).map((key) => {
          newdata[key] = data.map((item) => {
            return item[key];
          });
        });

        this.setState({
          data: newdata,
          rawdata: data,
          isYearRange: false,
          horizontal_axis: "country",
          vertical_axis: "sector",
          topic: "all",
          pestle: "all",
          region: "all",
          city: "all",
          measures: "intensity",
          confidence: "",
          swot: "all",
        });
      });

    this.setState({ isLoading: false });
  }

  getFormInput(event) {
    const { name, value, type, checked } = event.target;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  }

  render() {
    return <App state={this.state} getFormInput={this.getFormInput} />;
  }
}

export default AppContainer;
