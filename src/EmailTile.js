import './Tile.css';
import tempimg from './logo/logo-only-blue.png';

function EmailTile(props) {
    return (
        <div className="email-tile tile">
            <h3>Email Opt-Out</h3>
            <div className="tile-body">
                <div className="email-score score">
                    <p>Email Score</p>
                </div>
                <div className="email-priority-list">
                    <div className="email-priority-column">
                        <div className="priority-dot" style={{ 'backgroundColor': '#B43940' }} />
                        <div className="priority-dot" style={{ 'backgroundColor': 'green' }} />
                    </div>
                    <div className="email-priority-column priority-categories">
                        <p>Emails Received After Grace Period</p>
                        <p>Emails Received Within Grace Period</p>
                    </div>
                    <div className="email-priority-column">
                        <b>{props.afterGracePeriod}</b>
                        <b>{props.withinGracePeriod}</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailTile;