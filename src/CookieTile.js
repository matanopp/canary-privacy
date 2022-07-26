import "./Tile.css";
import DataBox from "./DataBox.js";
import ViewDetailsLink from "./ViewDetailsLink.js";
import viewDetailsImage from "./images/view-details.svg";
import { Link } from "react-router-dom";

function CookieTile(props) {
  let totalCookies =
    props.highPriority + props.mediumPriority + props.lowPriority;
  return (
    <Link className="cookie-tile tile" to="/cookies">
      <div>
        <h1>Cookie Compliance</h1>
        <p className="tile-subhead">
          <b>{totalCookies}</b> non-compliant cookie
          {totalCookies === 1 ? "" : "s"} detected
        </p>
      </div>
      {totalCookies === 0 ? (
        <div className="compliant zero-issues">Compliant</div>
      ) : (
        <div className="tile-body">
          <DataBox
            priorityLevel={"high-priority"}
            count={props.highPriority}
            priorityLabel={"High Priority"}
          />
          <DataBox
            priorityLevel={"medium-priority"}
            count={props.mediumPriority}
            priorityLabel={"Medium Priority"}
          />
          <DataBox
            priorityLevel={"low-priority"}
            count={props.lowPriority}
            priorityLabel={"Low Priority"}
          />
        </div>
      )}
      {/* <ViewDetailsLink to="/cookies" /> */}
    </Link>
  );
}

export default CookieTile;
