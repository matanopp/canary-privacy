import './Tile.css';
import { Link } from 'react-router-dom';
import DataBox from './DataBox.js';

function CookieTile(props) {
    return (
        <div className="cookie-tile tile">
            <h3>Cookie Compliance</h3>
            <p>We found cookies after opting out</p>
            <div className="tile-body">
                <DataBox
                    priorityLevel={"high-priority"}
                    count={props.highPriority}
                    dataType={"Cookies"}
                    priorityLabel={"High Priority"}
                />
                <DataBox
                    priorityLevel={"medium-priority"}
                    count={props.mediumPriority}
                    dataType={"Cookies"}
                    priorityLabel={"Medium Priority"}
                />
                <DataBox
                    priorityLevel={"low-priority"}
                    count={props.lowPriority}
                    dataType={"Cookies"}
                    priorityLabel={"Low Priority"}
                />
            </div>
            <Link className="view-report-button" to="/cookies">
                View Full Report
            </Link>
        </div>
    );
}

export default CookieTile;