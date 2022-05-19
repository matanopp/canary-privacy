import React from "react";
import './App.css';

class Popup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="popup-wrapper">
                <div className="popup-content">
                    <div className="popup-header">
                        <h1>{this.props.title}</h1>
                        <button className="popup-close-button" onClick={this.props.closePopup}>Close</button>
                    </div>
                    <div className="popup-page-content">
                        {this.props.pageContent}
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;