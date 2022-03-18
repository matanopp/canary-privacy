import './Table.css';

function Table(props) {
    return (
        <div className="table-wrapper">
            <table>
                <tbody>
                    <tr className="table-header">
                        {props.data && props.data.headerLabels &&
                            props.data.headerLabels.map(headerLabel => (
                                <th>{headerLabel}</th>
                            ))
                        }
                    </tr>
                    {props.data && props.data.rows &&
                        props.data.rows.map(row =>
                            <tr>
                                {row && row.map(item => <td>{item}</td>)}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;