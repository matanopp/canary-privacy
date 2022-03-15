import './Tile.css';
import { Link } from 'react-router-dom';
import DataBox from './DataBox.js';
import ViewDetailsLink from './ViewDetailsLink.js';
import viewDetailsImage from './images/view-details.svg'

function EmailTile(props) {
    return (
        <div className="email-tile tile">
            <h3>Email Opt-Out</h3>
            <p>Illegal emails received</p>
            <div className="tile-body">
                <DataBox
                    priorityLevel={"high-priority"}
                    count={props.afterGracePeriod}
                    priorityLabel={"Illegal Emails"}
                />
                <DataBox
                    priorityLevel={"medium-priority"}
                    count={props.withinGracePeriod}
                    priorityLabel={"Emails Sent"}
                />
            </div>
            <ViewDetailsLink to="/emails" />
        </div>
    );
}

export default EmailTile;