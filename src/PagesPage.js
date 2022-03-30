import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';

let keys = [
    // 'done',
    'url',
    // 'privacyPolicy',
    // 'version',
    'dateDetected',
];

let headers = {
    'done': 'Done',
    'url': 'Page URL',
    'privacyPolicy': 'Privacy Policy',
    'version': 'Version',
    'dateDetected': 'Date Detected',
};

class PagesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Pages</h1>
                {this.props.newPages.length > 0 &&
                    <>
                        <h2>New</h2>
                        <Table
                            tableType="pages"
                            data={{
                                keys: keys,
                                headers: headers,
                                rows: this.props.newPages,
                            }}
                        />
                    </>
                }
                {this.props.existingPages.length > 0 &&
                    <>
                        <h2>Existing</h2>
                        <Table
                            tableType="pages"
                            data={{
                                keys: keys,
                                headers: headers,
                                rows: this.props.existingPages,
                            }}
                        />
                    </>
                }
            </>
        );
    }
}

export default PagesPage;