import React from "react";

//css
import "./Loading.css";
function Loading() {
  return (
    <div className="Loading">
      <svg viewBox="-2000 -1000 4000 2000">
        <path
          id="stroke"
          d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"
        ></path>
        <use
          xlinkHref="#stroke"
          strokeDasharray="1570 5143"
          strokeDashoffset="6713px"
        />
      </svg>
    </div>
  );
}

export default Loading;
