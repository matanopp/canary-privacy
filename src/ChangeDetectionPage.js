import React from "react";
import Sidebar from './Sidebar.js';

class ChangeDetectionPage extends React.Component {
    render() {
        return (
            <div className="page-wrapper">
                <Sidebar thisPage="changeDetection" />
                <div className="page-content">
                    Change Detection
                </div>
            </div>
        );
    }
}

export default ChangeDetectionPage;