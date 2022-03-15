import './Tile.css';

function DataBox(props) {
    return (
        (props.count && props.count > 0) ?
            <div className={"data-box " + props.priorityLevel}>
                <p className={"data-count " + props.priorityLevel}>
                    {props.count}
                </p>
                <p style={{ fontWeight: "bolder" }}>
                    {props.priorityLabel}
                </p>
            </div>
            :
            null
    );
}

export default DataBox;