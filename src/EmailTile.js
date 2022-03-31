import './Tile.css';
import { Link } from 'react-router-dom';
import DataBox from './DataBox.js';
import ViewDetailsLink from './ViewDetailsLink.js';

function EmailTile(props) {
    return (
        <div className="email-tile tile">
            <h3>Email Opt-Out</h3>
            <p>Illegal emails received</p>
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
            <b className="overview-tile-total">
                {props.activeTests} Active Email Test{props.activeTests === 1 ? '' : 's'}
            </b>
            <ViewDetailsLink to="/emails" />
        </div>
    );
}

export default EmailTile;