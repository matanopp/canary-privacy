import './Tile.css';
import DataBox from './DataBox.js';
import ViewDetailsLink from './ViewDetailsLink.js';
import viewDetailsImage from './images/view-details.svg'

function CookieTile(props) {
    return (
        <div className="cookie-tile tile">
            <h3>Cookie Compliance</h3>
            <p>Non-compliant cookies detected</p>
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
            <ViewDetailsLink to="/cookies" />
        </div>
    );
}

export default CookieTile;