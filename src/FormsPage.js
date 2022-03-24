import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';

class FormsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keys: [
                'status',
                'dateDetected',
                'formIdURL',
                'policyExists',
            ],
            headers: {
                'status': 'Status',
                'dateDetected': 'Date Detected',
                'formIdURL': 'Form ID URL',
                'policyExists': 'Privacy Policy Exists',
            },
        };
    }

    render() {
        return (
            <>
                <h1>Forms</h1>
                <Table
                    tableType="pages"
                    data={{
                        'keys': this.state.keys,
                        'headers': this.state.headers,
                        'rows': [
                            {
                                'status': 'status',
                                'dateDetected': '3/24/22',
                                'formIdURL': 'www.formidurl.com',
                                'policyExists': true,
                            },
                            {
                                'status': 'status',
                                'dateDetected': '3/24/22',
                                'formIdURL': 'www.formidurl.com',
                                'policyExists': false,
                            },
                            {
                                'status': 'status',
                                'dateDetected': '3/24/22',
                                'formIdURL': 'www.formidurl.com',
                                'policyExists': true,
                            },
                            {
                                'status': 'status',
                                'dateDetected': '3/24/22',
                                'formIdURL': 'www.formidurl.com',
                                'policyExists': false,
                            },
                        ],
                    }}
                />
            </>
        );
    }
}

export default FormsPage;