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

let newOrExistingColumn = 'dateDetected';

class PagesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Pages</h1>
                {(this.props.newPages.length > 0 || this.props.existingPages.length > 0) &&
                    <Table
                        tableType="pages"
                        data={{
                            keys,
                            headers,
                            newRows: this.props.newPages,
                            existingRows: this.props.existingPages,
                            newOrExistingColumn,
                        }}
                    />
                }
            </>
        );
    }
}

export default PagesPage;