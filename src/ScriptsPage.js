import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';

class PagesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keys: [
                'scriptURL',
                'page',
                'dateDetected',
            ],
            headers: {
                'status': 'Status',
                'dateDetected': 'Date Detected',
                'scriptURL': 'Script URL',
                'page': 'Page',
            },
        };
    }

    render() {
        return (
            <>
                <h1>Scripts</h1>
                <Table
                    tableType="scripts"
                    data={{
                        'keys': this.state.keys,
                        'headers': this.state.headers,
                        'rows': [
                            {
                                'status': 'status',
                                'dateDetected': '3/24/22',
                                'scriptURL': 'www.scripturl.com',
                                'page': ['www.pageurl.com', 'www.pageurl.com', 'www.pageurl.com'],
                            },
                            {
                                'status': 'status',
                                'dateDetected': '3/24/22',
                                'scriptURL': 'www.scripturl.com',
                                'page': ['www.pageurl.com'],
                            },
                            {
                                'status': 'status',
                                'dateDetected': '3/24/22',
                                'scriptURL': 'www.scripturl.com',
                                'page': [],
                            },
                            {
                                'status': 'status',
                                'dateDetected': '3/24/22',
                                'scriptURL': 'www.scripturl.com',
                                'page': ['www.page1.com', 'www.page2.com', 'www.page3.com', 'www.page4.com', 'www.page5.com', 'www.page6.com', 'www.page7.com', 'www.page8.com', 'www.page9.com'],
                            },
                            {
                                'status': 'status',
                                'dateDetected': '3/24/22',
                                'scriptURL': 'www.scripturl.com',
                                'page': ['www.pageurl.com'],
                            },
                        ],
                    }}
                />
            </>
        );
    }
}

export default PagesPage;