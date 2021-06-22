import React from "react";
<<<<<<< HEAD
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../Collection-page/collection-page.component";

const Shop = ({ match }) => (
  <div className="shop_page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);
=======
import SHOP_DATA from "./shop-data.js";
import Preview from "../../components/preview/preview.component";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <Preview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
>>>>>>> 1df7f66449e1db729edf53ce66a763e4a6c1bae6

export default Shop;
