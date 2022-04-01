import './Table.css';
import { render } from '@testing-library/react';
import React from 'react';
import TableList from './TableList.js';
import alertIcon from './images/alert.svg';

class Table extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.data);
    }

    render() {
        return (
            <div className={this.props.tableType + "-table-wrapper table-wrapper"}>
                <table>
                    <thead>
                        <tr>
                            {this.props.data && this.props.data.keys && this.props.data.keys.map(key =>
                                <th>{this.props.data.headers && this.props.data.headers[key]}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data && this.props.data.newRows && this.props.data.newRows.map(row =>
                            <tr>
                                {this.props.data.keys && this.props.data.keys.map(key =>
                                    this.formatTableData(row, key, this.props.data.newOrExistingColumn)
                                )}
                            </tr>
                        )}
                        {this.props.data && this.props.data.existingRows && this.props.data.existingRows.map(row =>
                            <tr>
                                {this.props.data.keys && this.props.data.keys.map(key =>
                                    this.formatTableData(row, key)
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div >
        );
    }

    formatTableData(row, key, newOrExistingColumn = null) {
        let newLabel = <b className="new-label">NEW - </b>;
        return (
            <td className={key}>
                {typeof row[key] === 'string' &&
                    <p className={(row[key]).toLowerCase().replaceAll(' ', '-')}>
                        {key === newOrExistingColumn ? newLabel : null}
                        {row[key]}
                    </p>
                }
                {typeof row[key] === 'number' &&
                    <p className={"number-" + row[key]}>
                        {key === newOrExistingColumn ? newLabel : null}
                        {row[key]}
                    </p>
                }
                {typeof row[key] === 'boolean' &&
                    <div className={(row[key]).toString()} >
                        {row[key] ?
                            // placeholder for green checkmark or something
                            // <div style={{ 'width': '10px', 'height': '10px', 'backgroundColor': 'green', 'borderRadius': '50%' }} />
                            <img className="icon" src={alertIcon} alt="alert" />
                            :
                            // placeholder for red X or something
                            // <div style={{ 'width': '10px', 'height': '10px', 'backgroundColor': 'red', 'borderRadius': '50%' }} />
                            '-'
                        }
                    </div>
                }
                {row[key] instanceof Array &&
                    <div className='array'>
                        {row[key].length === 1 ?
                            <p>{row[key][0]}</p>
                            :
                            // <TableList items={row[key]} />
                            <p>{row[key].length} Pages</p>
                        }
                    </div>
                }
            </td>
        );
    }
}

export default Table;