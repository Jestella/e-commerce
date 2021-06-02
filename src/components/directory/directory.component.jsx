import React from "react";
import MenuItem from "../menu-item/menu-item.component";

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
            "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 2,
          linkUrl: "",
        },
        {
          title: "HOME",
          subtitle: "SHOP NOW",
          imageUrl:
            "https://images.pexels.com/photos/6702549/pexels-photo-6702549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 3,
          linkUrl: "",
        },
        {
          title: "LIFESTYLE",
          subtitle: "SHOP NOW",
          imageUrl:
            "https://images.pexels.com/photos/6198357/pexels-photo-6198357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 4,
          linkUrl: "",
        },
        {
          title: "BEAUTY",
          subtitle: "SHOP NOW",
          imageUrl:
            "https://images.pexels.com/photos/1665722/pexels-photo-1665722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory_menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
