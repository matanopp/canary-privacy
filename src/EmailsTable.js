import './Table.css';

function EmailsTable(props) {
    return (
        <div className="emails-table-wrapper table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Test Email</th>
                        <th>Overdue Emails Received</th>
                        <th>Days Overdue</th>
                        <th>Date First Emails Received</th>
                        <th>Sender Address</th>
                        <th>Test Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data && props.data.map(row =>
                        <tr>
                            <td className="status"><p className={row.status.toLowerCase().replaceAll(' ', '-')}>{row.status}</p></td>
                            <td>{row.testEmail}</td>
                            <td>{row.overdueEmails}</td>
                            <td>{row.daysOverdue}</td>
                            <td>{row.dateFirstEmailReceived}</td>
                            <td>{row.senderAddress}</td>
                            <td>{row.testDate}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    );
}

export default EmailsTable;