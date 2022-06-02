import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';
import _ from 'lodash'
import { pageConstants } from './pageConstants.js';

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
                            keys: pageConstants.rawCookies.keys,
                            headers: pageConstants.rawCookies.headers,
                            tooltipDescriptions: pageConstants.rawCookies.tooltipDescriptions,
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