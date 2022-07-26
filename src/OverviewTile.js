import "./Overview.css";
// import ViewDetailsLink from "./ViewDetailsLink.js";
import { Link } from "react-router-dom";

function OverviewTile(props) {
  return (
    <Link className="overview-tile" to={props.linkTo}>
      <div className="overview-tile-top-row">
        <p className="overview-tile-data">
          <b>
            {props.data > 0 ? "+" : ""}
            {props.data}
          </b>
        </p>
      </div>
      <div className="overview-tile-mid-row">
        <p className="overview-tile-message">{props.message}</p>
        {/* <br></br> */}
        <p className="overview-tile-total">
          <b>{props.total}</b> Total
        </p>
      </div>
      {/* <ViewDetailsLink to={props.linkTo} /> */}
    </Link>
  );
}

export default OverviewTile;
