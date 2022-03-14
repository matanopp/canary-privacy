import React from 'react';
import Sidebar from './Sidebar.js';
import './App.css';
import './CookiesPage.css';

class CookiesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'cookies': [
                {
                    'name': '_ga',
                    'type': 'Analytics',
                    'domain': '.safelite.com',
                    'status': 'Misclassified'
                },
                {
                    'name': '_gid',
                    'type': 'Analytics',
                    'domain': '.safelite.com',
                    'status': 'Mismanaged'
                },
                {
                    'name': 'MUID',
                    'type': 'Marketing',
                    'domain': '.bing.com',
                    'status': 'Mismanaged'
                },
                {
                    'name': 'MR',
                    'type': 'Marketing',
                    'domain': '.bat.bing.com',
                    'status': 'Misclassified'
                }
            ]
        };
    }

    render() {
        return (
            <div className="page-wrapper">
                <Sidebar thisPage="cookies" />
                <div className="page-content">
                    <div className="header">
                        <h1>Company Name</h1>
                    </div>
                    <div className="cookie-page-overview">
                        <div className="cookie-page-overview-section">
                            <h3>{this.props.mismanagedCookies}</h3>
                            <p>Mismanaged Cookies</p>
                        </div>
                        <div className="vertical-divider" />
                        <div className="cookie-page-overview-section">
                            <h3>{this.props.misclassifiedCookies}</h3>
                            <p>Misclassified Cookies</p>
                        </div>
                    </div>
                    <div className="cookie-table">
                        <div className="cookie-table-header">
                            <p className="cookie-table-item">Name</p>
                            <p className="cookie-table-item">Status</p>
                            <p className="cookie-table-item">Classification</p>
                            <p className="cookie-table-item">Domain</p>
                        </div>
                        {this.state.cookies.map((cookie) => (
                            <div className="cookie-table-row">
                                <p className="cookie-table-item">{cookie.name}</p>
                                <p className="cookie-table-item">{cookie.status}</p>
                                <p className="cookie-table-item">{cookie.type}</p>
                                <p className="cookie-table-item">{cookie.domain}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default CookiesPage;