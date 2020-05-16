import React from "react";
import Form from "./Form";

function FormContainer(props) {
  const categories = {
    topics: [...new Set(props.state.data.topic).add("All")].filter((val) => {
      return val !== "";
    }),
    regions: [...new Set(props.state.data.region).add("All")].filter((val) => {
      return val !== "";
    }),
    pestles: [...new Set(props.state.data.pestle).add("All")].filter((val) => {
      return val !== "";
    }),
    cities: [...new Set(props.state.data.city).add("All")].filter((val) => {
      return val !== "";
    }),
    axisCategories: ["Country", "City", "Pestle", "Sector", "Region", "Topic"],
  };

  return (
    <Form
      formState={props.state}
      getFormInput={props.getFormInput}
      categories={categories}
    />
  );
}

export default FormContainer;
