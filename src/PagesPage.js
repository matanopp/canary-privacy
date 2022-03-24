import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';

class PagesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keys: [
                'done',
                'url',
                'privacyPolicy',
                'version',
            ],
            headers: {
                'done': 'Done',
                'url': 'URL',
                'privacyPolicy': 'Privacy Policy',
                'version': 'Version',
            },
        };
    }

    render() {
        return (
            <>
                <h1>Pages</h1>
                <Table
                    tableType="pages"
                    data={{
                        'keys': this.state.keys,
                        'headers': this.state.headers,
                        'rows': [
                            {
                                'done': false,
                                'url': 'abc.com',
                                'privacyPolicy': 'ABSENT',
                                'version': '1.0',
                            },
                            {
                                'done': true,
                                'url': 'abc.com/1',
                                'privacyPolicy': 'OK',
                                'version': '1.0',
                            },
                            {
                                'done': false,
                                'url': 'abc.com/2',
                                'privacyPolicy': 'OLD VERSION',
                                'version': '1.0',
                            },
                        ],
                    }}
                />
            </>
        );
    }
}

export default PagesPage;