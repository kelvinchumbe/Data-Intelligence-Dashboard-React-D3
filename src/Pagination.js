import React from "react";

function Pagination(props) {
  const page_numbers = [];

  for (let i = 1; i <= props.total_pages; i++) {
    page_numbers.push(i);
  }

  return (
    <div className="pagination">
      <a
        href="!#"
        className="pagination-link"
        onClick={(event) => {
          event.preventDefault();
          props.selectDisplayData(props.current_page - 1);
        }}
      >
        Previous
      </a>
      <a
        href="!#"
        className="pagination-link"
        onClick={(event) => {
          event.preventDefault();
          props.selectDisplayData(props.first_page);
        }}
      >
        {props.first_page}
      </a>

      {props.current_page >= 5 &&
      props.current_page < props.last_page + 1 - 5 ? (
        <span>
          <a href="!#" className="pagination-link inactive">
            {"..."}
          </a>
          <a
            href="!#"
            className="pagination-link"
            onClick={(event) => {
              event.preventDefault();
              props.selectDisplayData(props.current_page - 1);
            }}
          >
            {props.current_page - 1}
          </a>
          <a
            href="!#"
            className="pagination-link"
            onClick={(event) => {
              event.preventDefault();
              props.selectDisplayData(props.current_page);
            }}
          >
            {props.current_page}
          </a>
          <a
            href="!#"
            className="pagination-link"
            onClick={(event) => {
              event.preventDefault();
              props.selectDisplayData(props.current_page + 1);
            }}
          >
            {props.current_page + 1}
          </a>
          <a href="!#" className="pagination-link inactive">
            {"..."}
          </a>
        </span>
      ) : (
        ""
      )}

      {props.current_page < 5 ? (
        <span>
          <a
            href="!#"
            className="pagination-link"
            onClick={(event) => {
              event.preventDefault();
              props.selectDisplayData(props.first_page + 1);
            }}
          >
            {props.first_page + 1}
          </a>
          <a
            href="!#"
            className="pagination-link"
            onClick={(event) => {
              event.preventDefault();
              props.selectDisplayData(props.first_page + 2);
            }}
          >
            {props.first_page + 2}
          </a>
          <a
            href="!#"
            className="pagination-link"
            onClick={(event) => {
              event.preventDefault();
              props.selectDisplayData(props.first_page + 3);
            }}
          >
            {props.first_page + 3}
          </a>
          <a
            href="!#"
            className="pagination-link"
            onClick={(event) => {
              event.preventDefault();
              props.selectDisplayData(props.first_page + 4);
            }}
          >
            {props.first_page + 4}
          </a>
          <a href="!#" className="pagination-link inactive">
            {"..."}
          </a>
        </span>
      ) : (
        ""
      )}

      {props.current_page >= props.last_page + 1 - 5 ? (
        <span>
          <a href="!#" className="pagination-link inactive">
            {"..."}
          </a>
          <a
            href="!#"
            className="pagination-link"
            onClick={(event) => {
              event.preventDefault();
              props.selectDisplayData(props.last_page + 1 - 5);
            }}
          >
            {props.last_page + 1 - 5}
          </a>
          <a
            href="!#"
            className="pagination-link"
            onClick={(event) => {
              event.preventDefault();
              props.selectDisplayData(props.last_page + 1 - 4);
            }}
          >
            {props.last_page + 1 - 4}
          </a>
          <a
            href="!#"
            className="pagination-link"
            onClick={(event) => {
              event.preventDefault();
              props.selectDisplayData(props.last_page + 1 - 3);
            }}
          >
            {props.last_page + 1 - 3}
          </a>
          <a
            href="!#"
            className="pagination-link"
            onClick={(event) => {
              event.preventDefault();
              props.selectDisplayData(props.last_page + 1 - 2);
            }}
          >
            {props.last_page + 1 - 2}
          </a>
        </span>
      ) : (
        ""
      )}
      <a
        href="!#"
        className="pagination-link"
        onClick={(event) => {
          event.preventDefault();
          props.selectDisplayData(props.last_page);
        }}
      >
        {" "}
        {props.last_page}
      </a>
      <a
        href="!#"
        className="pagination-link"
        onClick={(event) => {
          event.preventDefault();
          props.selectDisplayData(props.current_page + 1);
        }}
      >
        {" "}
        Next
      </a>
    </div>
  );
}

export default Pagination;
