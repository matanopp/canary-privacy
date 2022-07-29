import { Link } from "react-router-dom";
import viewDetailsImage from "./images/view-details.svg";

function ViewDetailsLink(props) {
  return (
    <Link className="view-details-button" to={props.to}>
      <p>View Details</p>
      <img src={viewDetailsImage} />
    </Link>
  );
}

export default ViewDetailsLink;
