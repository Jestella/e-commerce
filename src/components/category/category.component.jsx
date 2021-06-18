import React from "react";
import { withRouter } from "react-router-dom";

import "./category.styles.scss";

const Category = ({ title, subtitle, imageUrl, history, linkUrl, match }) => (
  <div
    className={`category`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background_image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />

    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);

export default withRouter(Category);
