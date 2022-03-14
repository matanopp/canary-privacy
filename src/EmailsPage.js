import React from "react";
import Sidebar from './Sidebar.js';

class EmailsPage extends React.Component {
    render() {
        return (
            <div className="page-wrapper">
                <Sidebar thisPage="emails" />
                <div className="page-content">
                    Emails
                </div>
            </div>
        );
    }
}

export default EmailsPage;