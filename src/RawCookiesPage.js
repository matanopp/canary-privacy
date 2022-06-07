import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';
import _ from 'lodash'

let keys = [
    'name',
    'domain',
    'type',
    'platform',
    'description',
    'retention_period', // TODO: Take from cookie and not from DB.
    'dateDetectedParsed',
    // 'regulation_link',
    'urls',
    // 'dateDetectedParsed'
];

let headers = {
    'name': 'Cookie Name',
    'domain' : 'Domain',
    'type' : 'Classification',
    'platform' : 'Platform',
    'description' : 'Description',
    'retention_period' : 'Duration',
    // 'regulation_link' : 'User Privacy Portals', //& GDPR Rights 
    'urls': 'Pages',
    'dateDetectedParsed' : 'Date Detected'
};

let newOrExistingColumn = 'dateDetectedParsed';

class RawCookiesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>All Cookies</h1>
                <p>{this.props.newRawCookies.length} New Cookies, {this.props.newRawCookies.length + this.props.existingRawCookies.length} Total Cookies</p>
                {(this.props.newRawCookies.length > 0 || this.props.existingRawCookies.length > 0) &&
                    <Table
                        tableType="allCookies"
                        data={{
                            keys,
                            headers,
                            newRows: _.orderBy(this.props.newRawCookies, (s) => s.urls.length, "desc"),
                            existingRows: _.orderBy(this.props.existingRawCookies, (s) => s.urls.length, "desc"),
                            newOrExistingColumn,
                        }}
                    />
                }
            </>
        );
    }
}

export default RawCookiesPage;