import React from "react";
import "./styles.css";

function Header() {
  return (
    <header>
      <h3>Heatmap</h3>

      <div className="board_links">
        <div className="outer_ring">
          <p> Heat View</p>
          <img
            src="http://getdrawings.com/free-icon-bw/batman-arkham-origins-icon-20.png"
            alt="heat icon"
            className="icon"
          />
        </div>

        <div className="outer_ring">
          <p> Cross Impact</p>
        </div>

        <div className="outer_ring">
          <p> Quick Guide</p>
        </div>

        <div className="outer_ring">
          <p> Feedback</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
