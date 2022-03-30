import React from 'react';
import Table from './Table.js';

let keys = [
    'status',
    'testEmail',
    'overdueEmails',
    'daysOverdue',
    'dateFirstEmailedReceived',
    'senderAddress',
    'testDate',
];
let headers = {
    'status': 'Status',
    'testEmail': 'Test Email',
    'overdueEmails': 'Overdue Emails Received',
    'daysOverdue': 'Days Overdue',
    'dateFirstEmailReceived': 'Date First Email Received',
    'senderAddress': 'Sender Address',
    'testDate': 'Test Date',
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