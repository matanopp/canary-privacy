import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';

class PagesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keys: [
                'status',
                'dateDetected',
                'scriptURL',
                'pageURL',
            ],
            headers: {
                'status': 'Status',
                'dateDetected': 'Date Detected',
                'scriptURL': 'Script URL',
                'pageURL': 'Page URL',
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
                                'pageURL': 'www.pageurl.com',
                            },
                            {
                                'status': 'status',
                                'dateDetected': '3/24/22',
                                'scriptURL': 'www.scripturl.com',
                                'pageURL': 'www.pageurl.com',
                            },
                            {
                                'status': 'status',
                                'dateDetected': '3/24/22',
                                'scriptURL': 'www.scripturl.com',
                                'pageURL': 'www.pageurl.com',
                            },
                            {
                                'status': 'status',
                                'dateDetected': '3/24/22',
                                'scriptURL': 'www.scripturl.com',
                                'pageURL': 'www.pageurl.com',
                            },
                            {
                                'status': 'status',
                                'dateDetected': '3/24/22',
                                'scriptURL': 'www.scripturl.com',
                                'pageURL': 'www.pageurl.com',
                            },
                        ],
                    }}
                />
            </>
        );
    }
}

export default PagesPage;