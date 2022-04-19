import './Table.css';
import { render } from '@testing-library/react';
import React from 'react';
import TableList from './TableList.js';
import alertIcon from './images/alert.svg';

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.tableType + "-table-wrapper table-wrapper"}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {this.props.data && this.props.data.keys && this.props.data.keys.map(key =>
                                <th>{this.props.data.headers && this.props.data.headers[key]}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data && this.props.data.newRows && this.props.data.newRows.map((row, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                {this.props.data.keys && this.props.data.keys.map(key =>
                                    this.formatTableData(row, key, this.props.data.newOrExistingColumn)
                                )}
                            </tr>
                        )}
                        {this.props.data && this.props.data.existingRows && this.props.data.existingRows.map((row, index) =>
                            <tr>
                                <td>{(this.props.data.newRows ? this.props.data.newRows.length : 0) + index + 1}</td>
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
        let newLabel = <b className="new-label">NEW </b>;
        return (
            <td className={key}>
                {typeof row[key] === 'string' && (key !== "url") &&
                    <p className={(row[key]).toLowerCase().replaceAll(' ', '-')} tabindex="0">
                        {key === newOrExistingColumn ? newLabel : null}
                        {row[key]}
                    </p>
                }
                {typeof row[key] === 'string' && (key === "url") &&
                    <a className={(row[key]).toLowerCase().replaceAll(' ', '-')} href={row[key]} target="_blank" rel='noreferrer'>
                        {key === newOrExistingColumn ? newLabel : null}
                        {row[key]}
                    </a>
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
                            <img className="icon" src={alertIcon} alt="alert" />
                            :
                            '-'
                        }
                    </div>
                }
                {row[key] instanceof Array &&
                    <div className='array'>
                        <TableList items={row[key]} />
                    </div>
                }
            </td>
        );
    }
}

export default Table;