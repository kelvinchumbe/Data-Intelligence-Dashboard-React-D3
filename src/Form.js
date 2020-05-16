import React from "react";
import "./styles.css";

function Form(props) {
  return (
    <form className="last_block">
      <div className="year card">
        <h3 className="title"> Year Range </h3>

        <label className="switch">
          <input
            type="checkbox"
            name="isYearRange"
            onChange={props.getFormInput}
          />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="coordinates card">
        <h4>
          <strong> Coordinates </strong>
        </h4>

        <div className="coord">
          <div className="horizontal">
            <h5>
              <strong> Horizontal axis </strong>
            </h5>
            <select
              name="horizontal_axis"
              value={props.formState.horizontal_axis}
              onChange={props.getFormInput}
            >
              {props.categories.axisCategories.map((category, i) => {
                return (
                  <option
                    value={category.toLowerCase()}
                    key={i}
                    selected={props.formState.vertical_axis === category}
                  >
                    {category}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="vertical">
            <h5>
              <strong>Vertical axis </strong>
            </h5>
            <select
              name="vertical_axis"
              value={props.formState.vertical_axis}
              onChange={props.getFormInput}
            >
              {props.categories.axisCategories.map((category, i) => {
                return (
                  <option
                    value={category.toLowerCase()}
                    key={i}
                    selected={
                      props.formState.vertical_axis === category.toLowerCase()
                    }
                  >
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="last_row">
        <div className="chart_filters card">
          <h3 className="title">Filters</h3>

          <h4>Topic</h4>
          <select
            name="topic"
            value={props.formState.topic}
            onChange={props.getFormInput}
          >
            {props.categories.topics.map((category, i) => {
              return (
                <option
                  value={category.toLowerCase()}
                  key={i}
                  selected={props.formState.topic === category}
                >
                  {category}
                </option>
              );
            })}
          </select>

          <h4>Region</h4>
          <select
            name="region"
            value={props.formState.region}
            onChange={props.getFormInput}
          >
            {props.categories.regions.map((category, i) => {
              return (
                <option
                  value={category.toLowerCase()}
                  key={i}
                  selected={props.formState.region === category}
                >
                  {category}
                </option>
              );
            })}
          </select>

          <h4>Pestle</h4>
          <select
            name="pestle"
            value={props.formState.pestle}
            onChange={props.getFormInput}
          >
            {props.categories.pestles.map((category, i) => {
              return (
                <option
                  value={category.toLowerCase()}
                  key={i}
                  selected={props.formState.pestle === category}
                >
                  {category}
                </option>
              );
            })}
          </select>

          <h4>City</h4>
          <select
            name="city"
            value={props.formState.city}
            onChange={props.getFormInput}
          >
            {props.categories.cities.map((category, i) => {
              return (
                <option
                  value={category.toLowerCase()}
                  key={i}
                  selected={props.formState.city === category}
                >
                  {category}
                </option>
              );
            })}
          </select>
        </div>

        <div className="block2">
          <div className="measures card">
            <h3 className="title">Measures</h3>
            <br />
            <select
              name="measures"
              value={props.formState.measures}
              onChange={props.getFormInput}
            >
              <option value="intensity" selected>
                {" "}
                Intensity{" "}
              </option>
              <option value="likelihood"> Likelihood </option>
              <option value="relevance"> Relevance </option>
            </select>
          </div>

          <div className="confidence card">
            <h3 className="title">Confidence</h3>
            <br />
            <input
              type="radio"
              name="confidence"
              value="90"
              onChange={props.getFormInput}
            />
            <span className="values">90%</span>
            <br />
            <input
              type="radio"
              name="confidence"
              value="95"
              onChange={props.getFormInput}
            />
            <span className="values">95%</span>
            <br />
            <input
              type="radio"
              name="confidence"
              value="99"
              onChange={props.getFormInput}
            />
            <span className="values">99%</span>
          </div>

          <div className="swot card">
            <h3 className="title">SWOT</h3>
            <br />
            <select
              name="swot"
              value={props.formState.swot}
              onChange={props.getFormInput}
            >
              <option value="all" selected>
                {" "}
                All{" "}
              </option>
              <option value="strength"> Strength </option>
              <option value="weakness"> Weakness </option>
              <option value="opportunity"> Opportunity </option>
              <option value="threat"> Threat </option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
