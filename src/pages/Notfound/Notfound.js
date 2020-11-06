import React from "react";

import "./Notfound.css";
import NotfoundImg from "../../assets/images/notfound.png";

export default function() {
  return (
    <div
      className="page-notfound"
      style={{ backgroundImage: `url(${NotfoundImg})` }}
    />
  );
}
