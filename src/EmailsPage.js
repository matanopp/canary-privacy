import React from 'react';
import Table from './Table.js';

class EmailsPage extends React.Component {
    render() {
        return (
            <>
                <h1>Email Compliance</h1>
                <Table
                    tableType='emails'
                    data={
                        {
                            keys: [
                                'status',
                                'testEmail',
                                'overdueEmails',
                                'daysOverdue',
                                'dateFirstEmailedReceived',
                                'senderAddress',
                                'testDate',
                            ],
                            headers: {
                                'status': 'Status',
                                'testEmail': 'Test Email',
                                'overdueEmails': 'Overdue Emails Received',
                                'daysOverdue': 'Days Overdue',
                                'dateFirstEmailReceived': 'Date First Email Received',
                                'senderAddress': 'Sender Address',
                                'testDate': 'Test Date',
                            },
                            rows: [
                                {
                                    status: 'ALERT',
                                    testEmail: 'abc@gmail.com',
                                    overdueEmails: '2',
                                    daysOverdue: '3',
                                    dateFirstEmailReceived: '03/03/2022',
                                    senderAddress: 'mywebsite.com',
                                    testDate: '02/03/2022',
                                },
                                {
                                    status: 'OK',
                                    testEmail: 'abc@gmail.com',
                                    overdueEmails: '',
                                    daysOverdue: '',
                                    dateFirstEmailReceived: '03/04/2022',
                                    senderAddress: 'mywebsite.com',
                                    testDate: '03/03/2022',
                                },
                                {
                                    status: 'NO DATA',
                                    testEmail: 'abc@gmail.com',
                                    overdueEmails: '',
                                    daysOverdue: '',
                                    dateFirstEmailReceived: '',
                                    senderAddress: '',
                                    testDate: '04/03/2022',
                                },
                                {
                                    status: 'OK',
                                    testEmail: 'abc@gmail.com',
                                    overdueEmails: '',
                                    daysOverdue: '',
                                    dateFirstEmailReceived: '',
                                    senderAddress: '',
                                    testDate: '02/03/2022',
                                },
                            ]
                        }
                    } />
            </>
        );
    }
}

export default EmailsPage;