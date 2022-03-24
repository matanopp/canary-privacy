import './Tile.css';

function DataBox(props) {
    return (
        <div className={"data-box " + (props.count && props.count > 0 ? props.priorityLevel : 'zero-issues')}>
            <h2>
                {props.count}
            </h2>
            <h3>
                {props.priorityLabel}
            </h3>
        </div>
    );
}

export default DataBox;