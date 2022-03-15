import './Overview.css';
import ViewDetailsLink from './ViewDetailsLink.js';

function OverviewTile(props) {
    return (
        <div className="overview-tile">
            <div className="overview-tile-top-row">
                <p className="overview-tile-data"><b>{props.data > 0 ? "+" : ""}{props.data}</b></p>
                <img className="overview-tile-image" src={props.img} />
            </div>
            <b className="overview-tile-message">{props.message}</b>
            <b className="overview-tile-total">{props.total} Total</b>
            <ViewDetailsLink to={props.linkTo} />
        </div>
    );
}

export default OverviewTile;