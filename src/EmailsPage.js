import React from 'react';
import Table from './Table.js';

let keys = [
    'priority',
    'testAddress',
    'testDate',
    'testPage',
    'emailsReceived',
    'senderAddress',
];
let headers = {
    'priority': 'Priority',
    'testAddress': 'Test Address',
    'testDate': 'Test Date',
    'testPage': 'Opt-In Page',
    'emailsReceived': 'Emails Received After Opt-Out',
    'senderAddress': 'Sender Address',
};

class EmailsPage extends React.Component {
    render() {
        return (
            <>
                <h1>Email Compliance</h1>
                <Table
                    tableType='emails'
                    data={
                        {
                            keys: keys,
                            headers: headers,
                            rows: this.props.emails,
                        }
                    } />
            </>
        );
    }
}

export default EmailsPage;