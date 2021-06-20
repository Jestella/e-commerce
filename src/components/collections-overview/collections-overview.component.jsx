import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import Preview from "../preview/preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  <div className="collections_overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <Preview key={id} {...otherCollectionProps} />
    ))}
  </div>;
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
