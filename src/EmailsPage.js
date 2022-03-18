import React from 'react';
import Table from './Table.js';

class EmailsPage extends React.Component {
    render() {
        return (
            <>
                <h1>Email Compliance</h1>
                <Table data={{
                    headerLabels: [
                        'Status',
                        'Test Email',
                        'Overdue Emails Received',
                        'Days Overdue',
                        'Date First Emails Received',
                        'Sender Address',
                        'Test Date',
                    ],
                    rows: [
                        [
                            'ALERT',
                            'abc@gmail.com',
                            '2',
                            '3',
                            '03/03/2022',
                            'mywebsite.com',
                            '02/03/2022',
                        ],
                        [
                            'OK',
                            'abc@gmail.com',
                            '',
                            '',
                            '03/04/2022',
                            'mywebsite.com',
                            '03/03/2022',
                        ],
                        [
                            'NO DATA',
                            'abc@gmail.com',
                            '',
                            '',
                            '',
                            '',
                            '04/03/2022',
                        ],
                        [
                            'OK',
                            'abc@gmail.com',
                            '',
                            '',
                            '',
                            '',
                            '02/03/2022',
                        ],
                    ]
                }} />
            </>
        );
    }
}

export default EmailsPage;