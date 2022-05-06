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
        <b className="overview-tile-message">{props.message}</b>
        <br></br>
        <b className="overview-tile-total">{props.total} Total</b>
      </div>
      <ViewDetailsLink to={props.linkTo} />
    </div>
  );
}

export default OverviewTile;
