import './Table.css';

function CookiesTable(props) {
    return (
        <div className="cookies-table-wrapper table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Risk</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>
                            Classification
                            <div className="cookie-table-classifications">
                                <p>Expected</p>
                                <p>Actual</p>
                            </div>
                        </th>
                        <th>Domain</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data && props.data.map(row =>
                        <tr>
                            <td className="risk"><p className={row.risk.toLowerCase()}>{row.risk.toUpperCase()}</p></td>
                            <td>{row.name}</td>
                            <td className="status">{row.status.map(status => <p className={status.toLowerCase()}>{status}</p>)}</td>
                            <td>
                                <div className="cookie-table-classifications">
                                    <p>{row.classificationExpected}</p>
                                    <p>{row.classificationActual}</p>
                                </div>
                            </td>
                            <td>{row.domain}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default CookiesTable;