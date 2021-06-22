import React from "react";
import { connect } from "react-redux";
import CustomButton from "../button/button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
<<<<<<< HEAD
  const { brand, name, price, imageUrl } = item;
=======
  const { name, price, imageUrl } = item;
>>>>>>> 1df7f66449e1db729edf53ce66a763e4a6c1bae6
  return (
    <div className="collection_item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection_footer">
<<<<<<< HEAD
        <span className="brand">{brand}</span>
        <div className="name_and_price">
          <span className="name">{name}</span>
          <span className="price">C${price}</span>
        </div>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to bag
=======
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
>>>>>>> 1df7f66449e1db729edf53ce66a763e4a6c1bae6
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
