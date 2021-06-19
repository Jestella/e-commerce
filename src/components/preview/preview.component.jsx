import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./preview.styles.scss";

const Preview = ({ title, items }) => (
  <div className="preview_container">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default Preview;
