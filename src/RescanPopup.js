import React from "react";
import './App.css';

class RescanPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pressedRescanSubmitButton: false,
        }
    }

    render() {
        return (
            <div className="popup-wrapper">
                <div className="popup-content">
                    {!this.state.pressedRescanSubmitButton ?
                        <>
                            <div>
                                <h1>Request Rescan</h1>
                                <h3>Would you like Canary Privacy to scan the domain <i>{this.props.rescanDomain}</i> again?</h3>
                                {/* <p>This domain was last scanned...</p> */}
                                <p>Scanning a domain typically takes 3-5 business days.</p>
                            </div>
                            <div className="popup-buttons">
                                <button onClick={this.props.hideRescanPopup}>Cancel</button>
                                <button
                                    id="rescan-button"
                                    className="popup-button-primary"
                                    onClick={() => this.setState({ pressedRescanSubmitButton: true })}>
                                    Make Request
                                </button>
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <h1>Rescan Request Successfully Submitted</h1>
                                <p>Your rescan request has been submitted and we will let you know when it is complete.</p>
                            </div>
                            <button onClick={this.props.hideRescanPopup}>Close</button>
                        </>
                    }
                </div>
            </div>
        );
    }
}

export default RescanPopup;