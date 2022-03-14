import './Tile.css';
import { Link } from 'react-router-dom';
import DataBox from './DataBox.js';

function EmailTile(props) {
    return (
        <div className="email-tile tile">
            <h3>Email Opt-Out</h3>
            <p>Emails received after the grace period</p>
            <div className="tile-body">
                <DataBox
                    priorityLevel={"high-priority"}
                    count={props.afterGracePeriod}
                    dataType={"Emails Received"}
                    priorityLabel={"after grace period"}
                />
                <DataBox
                    priorityLevel={"low-priority"}
                    count={props.withinGracePeriod}
                    dataType={"Emails Received"}
                    priorityLabel={"within grace period"}
                />
            </div>
            <Link className="view-report-button" to="/emails">
                View Full Report
            </Link>
        </div>
    );
}

export default EmailTile;