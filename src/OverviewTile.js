import './Overview.css'
import OverviewSection from './OverviewSection.js';

function OverviewTile(props) {
    return (
        <div className="overview">
            <h3>
                Analytics Overview
            </h3>
            <div className="overview-container">
                <OverviewSection data={props.cookies} message={"Non-compliant cookies"} />
                <div className="vertical-divider" />
                <OverviewSection data={props.emails} message={"Emails received after opting out"} />
                <div className="vertical-divider" />
                <OverviewSection data={props.changes} message={"Change detection"} />
            </div>
        </div>
    );
}

export default OverviewTile;