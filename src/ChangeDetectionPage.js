import React from "react";
import Sidebar from './Sidebar.js';

class ChangeDetectionPage extends React.Component {
    render() {
        return (
            <>
                <Sidebar thisPage="changeDetection" />
                <div className="page-wrapper">
                    <div className="page-content">
                        Change Detection
                    </div>
                </div>
            </>
        );
    }
}

export default ChangeDetectionPage;