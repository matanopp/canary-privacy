import './Tile.css';
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
            <button className="view-report-button">
                View Full Report
            </button>
        </div>
    );
}

export default EmailTile;