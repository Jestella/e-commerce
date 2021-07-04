import React from "react";
import { connect } from "react-redux";
import CustomButton from "../button/button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { brand, name, price, imageUrl } = item;

  return (
    <div className="collection_item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection_footer">
        <span className="brand">{brand}</span>
        <div className="name_and_price">
          <span className="name">{name}</span>
          <span className="price">C${price}</span>
        </div>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to bag
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
