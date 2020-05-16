import React from "react";
import Header from "./Header";
import TopRow from "./TopRow";
import MidRow from "./MidRow";
import BottomRow from "./BottomRow";
import "./styles.css";

function App(props) {
  return (
    <div>
      <Header />
      <div className="main_body">
        <TopRow state={props.state} getFormInput={props.getFormInput} />
        <MidRow state={props.state} />
        <BottomRow state={props.state} />
      </div>
    </div>
  );
}

export default App;
