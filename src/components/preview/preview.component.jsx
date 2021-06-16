import React from "react";

import "./preview.styles.scss";

const Preview = ({ title, items }) => (
  <div className="preview_container">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview"></div>
  </div>
);

export default Preview;
