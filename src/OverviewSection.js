import './Overview.css';

function OverviewSection(props) {
    return (
        <div className="overview-section">
            <p className="overview-section-data"><b>{props.data}</b></p>
            <p className="overview-section-message">{props.message}</p>
        </div>
    );
}

export default OverviewSection;