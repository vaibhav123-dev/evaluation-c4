import React from "react";

export const Navbar = () => {
  return (
    <div id="navbar">
      <div style={{ display: "flex" }}>
        <div>
          <img
            src="http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
            alt=""
            style={{ width: "200px", height: "100px" }}
          />
        </div>
        <div className="topdiv">
          <input type="text" />
          <button className="search">Search</button>
        </div>
      </div>

      <div>
        <button>Sort A-Z</button>
        <button>Sort Z-A</button>
        <button>Sort by Date (Asc)</button>
        <button>Sort by Date (Desc)</button>
        <button>Sort by quality (Asc)</button>
        <button>Sort by quality (Desc)</button>
        <button>Filter Explicit</button>
      </div>
    </div>
  );
};
