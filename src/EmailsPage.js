import React from "react";
import Sidebar from './Sidebar.js';

class EmailsPage extends React.Component {
    render() {
        return (
            <>
                <Sidebar thisPage="emails" />
                <div className="page-wrapper">
                    <div className="page-content">
                        Emails
                    </div>
                </div>
            </>
        );
    }
}

export default EmailsPage;