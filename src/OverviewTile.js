import "./Overview.css";
import ViewDetailsLink from "./ViewDetailsLink.js";

function OverviewTile(props) {
  return (
    <div className="overview-tile">
      <div className="overview-tile-top-row">
        <p className="overview-tile-data">
          <b>
            {props.data > 0 ? "+" : ""}
            {props.data}
          </b>
        </p>
        <img className="overview-tile-image" src={props.img} />
      </div>
      <div className="overview-tile-mid-row">
        <p className="overview-tile-message">{props.message}</p>
        {/* <br></br> */}
        <p className="overview-tile-total">
          <b>{props.total}</b> Total
        </p>
      </div>
      <ViewDetailsLink to={props.linkTo} />
    </div>
  );
}

export default OverviewTile;
