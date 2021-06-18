import React from "react";
import Category from "../category/category.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "WOMENS",
          subtitle: "SHOP NOW",
          imageUrl:
            "https://images.pexels.com/photos/2410770/pexels-photo-2410770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          id: 1,
          linkUrl: "womens",
        },
        {
          title: "MENS",
          subtitle: "SHOP NOW",
          imageUrl:
            "https://images.pexels.com/photos/6198357/pexels-photo-6198357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 2,
          linkUrl: "mens",
        },
        {
          title: "HOME",
          subtitle: "SALE UP TO 30% OFF",
          imageUrl:
            "https://images.pexels.com/photos/6702549/pexels-photo-6702549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 3,
          linkUrl: "home",
        },
        {
          title: "BEAUTY",
          subtitle: "SALE UP TO 50% OFF",
          imageUrl:
            "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 4,
          linkUrl: "beauty",
        },
        {
          title: "LIFESTYLE",
          subtitle: "SHOP NOW",
          imageUrl:
            "https://images.pexels.com/photos/1665722/pexels-photo-1665722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          id: 5,
          linkUrl: "lifestyle",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory_container">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <Category key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
