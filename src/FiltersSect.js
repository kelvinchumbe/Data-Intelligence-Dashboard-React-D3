import React from "react";
import Node from "./Node";
// import Form from "./Form";
import "./styles.css";
import FormContainer from "./FormContainer";

function FiltersSect(props) {
  // {
  //   console.log(props.state.data);
  // }
  return (
    <div className="filters">
      <Node />
      <FormContainer state={props.state} getFormInput={props.getFormInput} />
    </div>
  );
}

export default FiltersSect;
