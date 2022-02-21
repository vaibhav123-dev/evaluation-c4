import React from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../redux/action";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const dataSearch = (e) => {
    if (e.key === "Enter") {
      const data = e.target.value;
      dispatch(getdata(data));
      navigate(`/search`);
    }
  };

  return (
    <div>
      <div>
        <img
          src="http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
          alt=""
          style={{ width: "300px", height: "150px" }}
        />
      </div>
      <input
        type="text"
        className="search-box"
        placeholder="Search google..."
        // onChange={(e) => {
        //   search(e.target.value);
        // }}
        onKeyPress={(e) => dataSearch(e)}
      />
    </div>
  );
};
