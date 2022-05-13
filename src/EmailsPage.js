import React from 'react';
import Table from './Table.js';
import { pageConstants } from './pageConstants.js';

class EmailsPage extends React.Component {
    render() {
        return (
            <>
                <h1>Email Compliance</h1>
                <Table
                    tableType='emails'
                    data={
                        {
                            keys: pageConstants.emails.keys,
                            headers: pageConstants.emails.headers,
                            tooltipDescriptions: pageConstants.emails.tooltipDescriptions,
                            existingRows: this.props.emails,
                        }
                    } />
            </>
        );
    }
}

export default EmailsPage;