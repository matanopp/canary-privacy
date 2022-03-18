import React from 'react';
import Table from './Table.js';
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
            <>
                <h1>Cookie Compliance</h1>
                <Table
                    data={{
                        headerLabels: [
                            'Risk',
                            'Name',
                            'Status',
                            'Classification',
                            'Domain',
                        ],
                        rows: [
                            [
                                'High',
                                'abc',
                                'Mismanaged',
                                'Marketing',
                                'mywebsite.com',
                            ],
                            [
                                'Medium',
                                'abc',
                                'Misclassified',
                                'Analytics',
                                'mywebsite.com',
                            ],
                        ]
                    }}
                />
                {/* <div className="cookie-page-overview">
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
                </div> */}
            </>
        );
    }
}

export default CookiesPage;