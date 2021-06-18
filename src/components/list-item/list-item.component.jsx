import "./list-item.styles.scss";

import CustomButton from "../button/button.component";

const ListItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="list_item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="list_footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default ListItem;
