import React from "react";
import "./App.css";

class RescanRequestContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressedRescanSubmitButton: false,
    };
  }

  render() {
    return (
      <div className="rescan-content">
        {!this.state.pressedRescanSubmitButton ? (
          <>
            {/* <div> */}
            <p>
              Would you like Canary Privacy to scan the domain{" "}
              <i style={{ fontWeight: "bold" }}>{this.props.rescanDomain}</i>{" "}
              again?
            </p>
            {/* <p>This domain was last scanned...</p> */}
            {/* </div> */}
            <button
              id="rescan-button"
              className="popup-button-primary"
              onClick={() => this.setState({ pressedRescanSubmitButton: true })}
            >
              Make Request
            </button>
          </>
        ) : (
          <p>Rescan Request Successfully Submitted</p>
        )}
      </div>
    );
  }
}

export default RescanRequestContent;
