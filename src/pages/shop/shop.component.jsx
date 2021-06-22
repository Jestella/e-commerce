import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../Collection-page/collection-page.component";

const Shop = ({ match }) => (
  <div className="shop_page">
    <Route
      exact
      path={`/e-commerce/${match.path}`}
      component={CollectionsOverview}
    />
    <Route
      path={`/e-commerce/${match.path}/:collectionId`}
      component={CollectionPage}
    />
  </div>
);

export default Shop;
