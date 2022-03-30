import './Table.css';
import { render } from '@testing-library/react';
import React from 'react';
import TableList from './TableList.js';

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
                            {this.props.data && this.props.data.keys && this.props.data.keys.map(key =>
                                <th>{this.props.data.headers && this.props.data.headers[key]}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data && this.props.data.rows && this.props.data.rows.map(row =>
                            <tr>
                                {this.props.data.keys && this.props.data.keys.map(key =>
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
                                        {row[key] instanceof Array &&
                                            <div className='array'>
                                                {row[key].length === 1 ?
                                                    <p>{row[key][0]}</p>
                                                    :
                                                    <TableList items={row[key]} />
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
}

export default Table;