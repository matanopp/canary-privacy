import "./Tile.css";

function ChangeDetectionTile(props) {
  return (
    <div className="change-detection-tile tile">
      <h3>Change Detection</h3>
      <p>New changes detected since last update</p>
    </div>
  );
}

export default ChangeDetectionTile;
