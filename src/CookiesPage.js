import React from 'react';
import Table from './Table.js';
import './App.css';
import { pageConstants } from './pageConstants.js';

class CookiesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Cookie Compliance</h1>
                <Table
                    tableType='cookies'
                    data={{
                        keys: pageConstants.cookies.keys,
                        headers: pageConstants.cookies.headers,
                        tooltipDescriptions: pageConstants.cookies.tooltipDescriptions,
                        existingRows: this.props.cookies
                    }}
                />
            </>
        );
    }
}

export default CookiesPage;