import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category-page/category-page.component";

const Shop = ({ match }) => (
  <div className="shop_page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/`} />
  </div>
);

export default Shop;
