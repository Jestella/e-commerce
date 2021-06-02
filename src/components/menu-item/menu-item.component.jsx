import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, subtitle, imageUrl, history, linkUrl, match }) => (
  <div
    className={`menu_item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background_image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
