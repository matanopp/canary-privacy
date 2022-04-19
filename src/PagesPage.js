import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';
import _ from 'lodash'

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
                <p>{this.props.newPages.length} New Pages, {this.props.newPages.length + this.props.existingPages.length} Total Pages</p>
                {(this.props.newPages.length > 0 || this.props.existingPages.length > 0) &&
                    <Table
                        tableType="pages"
                        data={{
                            keys,
                            headers,
                            newRows: _.orderBy(this.props.newPages, (s) => s.url),
                            existingRows: _.orderBy(this.props.existingPages, (s) => s.url),
                            newOrExistingColumn,
                        }}
                    />
                }
            </>
        );
    }
}

export default PagesPage;