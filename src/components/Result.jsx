import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "./Navbar";

export const Result = () => {
  const searchedData = useSelector((store) => store.data);
  console.log(searchedData);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        {searchedData.map((item) => {
          return <div key={item.id}>Hello</div>;
        })}
      </div>
    </div>
  );
};
