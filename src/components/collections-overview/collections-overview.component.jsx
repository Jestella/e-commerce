import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

<<<<<<< HEAD
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
=======
import { selectCollections } from "../../redux/shop/shop.selectors";
import Preview from "../preview/preview.component";
>>>>>>> 1df7f66449e1db729edf53ce66a763e4a6c1bae6

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  <div className="collections_overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
<<<<<<< HEAD
      <CollectionPreview key={id} {...otherCollectionProps} />
=======
      <Preview key={id} {...otherCollectionProps} />
>>>>>>> 1df7f66449e1db729edf53ce66a763e4a6c1bae6
    ))}
  </div>;
};

const mapStateToProps = createStructuredSelector({
<<<<<<< HEAD
  collections: selectCollectionsForPreview,
=======
  collections: selectCollections,
>>>>>>> 1df7f66449e1db729edf53ce66a763e4a6c1bae6
});

export default connect(mapStateToProps)(CollectionsOverview);
