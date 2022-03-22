import './Table.css';

function Table(props) {
    return (
        <div className={props.tableType + "-table-wrapper table-wrapper"}>
            <table>
                <thead>
                    <tr>
                        {props.data && props.data.keys && props.data.keys.map(key =>
                            <th>{props.data.headers && props.data.headers[key]}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {props.data && props.data.rows && props.data.rows.map(row =>
                        <tr>
                            {props.data.keys && props.data.keys.map(key =>
                                <td className={key}>
                                    {typeof row[key] === 'string' &&
                                        <p className={(row[key]).toLowerCase().replaceAll(' ', '-')}>
                                            {row[key]}
                                        </p>
                                    }
                                    {typeof row[key] === 'boolean' &&
                                        <div className={(row[key]).toString()} >
                                            {row[key] ?
                                                // placeholder for green checkmark or something
                                                <div style={{ 'width': '10px', 'height': '10px', 'backgroundColor': 'green', 'borderRadius': '50%' }} />
                                                :
                                                // placeholder for red X or something
                                                <div style={{ 'width': '10px', 'height': '10px', 'backgroundColor': 'red', 'borderRadius': '50%' }} />
                                            }
                                        </div>
                                    }
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    );
}

export default Table;