import "./Tile.css";
import { Link } from "react-router-dom";
import DataBox from "./DataBox.js";
import ViewDetailsLink from "./ViewDetailsLink.js";

function EmailTile(props) {
  return (
    <Link className="email-tile tile" to="/emails">
      <div>
        <h1>Email Opt-Out</h1>
        <p className="tile-subhead">
          <b>{props.activeTests}</b> Active Email Test
          {props.activeTests === 1 ? "" : "s"}
        </p>
      </div>
      <div className="tile-body">
        <DataBox
          priorityLevel={"high-priority"}
          count={props.nonCompliant}
          priorityLabel={"Non-Compliant Emails"}
        />
        {/* <DataBox
                    priorityLevel={"medium-priority"}
                    count={props.activeTests}
                    priorityLabel={"Active Email Tests"}
                /> */}
      </div>
      {/* <ViewDetailsLink to="/emails" /> */}
    </Link>
  );
}

export default EmailTile;
