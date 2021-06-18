import React from "react";
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

export default Shop;
