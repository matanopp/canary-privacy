import React from "react";
import './App.css';

class RescanRequestContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pressedRescanSubmitButton: false,
        }
    }

    render() {
        return (
            <div className="rescan-content">
                {!this.state.pressedRescanSubmitButton ?
                    <>
                        {/* <div> */}
                        <h3>Would you like Canary Privacy to scan the domain <i>{this.props.rescanDomain}</i> again?</h3>
                        {/* <p>This domain was last scanned...</p> */}
                        {/* </div> */}
                        <button
                            id="rescan-button"
                            className="popup-button-primary"
                            onClick={() => this.setState({ pressedRescanSubmitButton: true })}>
                            Make Request
                        </button>
                    </>
                    :
                    <h3>Rescan Request Successfully Submitted</h3>
                }
            </div>
        );
    }
}

export default RescanRequestContent;