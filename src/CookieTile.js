import './Tile.css';
import tempimg from './logo/logo-only-blue.png'

function CookieTile(props) {
    return (
        <div className="cookie-tile tile">
            <h3>Cookie Compliance</h3>
            <div className="tile-body">
                <div className="cookie-score score">
                    <p>Cookie Score</p>
                </div>
                <div className="cookie-priority-list">
                    <div className="cookie-priority-column">
                        <div className="priority-dot" style={{ 'backgroundColor': '#B43940' }} />
                        <div className="priority-dot" style={{ 'backgroundColor': '#F1B760' }} />
                        <div className="priority-dot" style={{ 'backgroundColor': '#0592EC' }} />
                    </div>
                    <div className="cookie-priority-column priority-categories">
                        <p>High Priority</p>
                        <p>Medium Priority</p>
                        <p>Low Priority</p>
                    </div>
                    <div className="cookie-priority-column">
                        <b>{props.highPriority}</b>
                        <b>{props.mediumPriority}</b>
                        <b>{props.lowPriority}</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CookieTile;