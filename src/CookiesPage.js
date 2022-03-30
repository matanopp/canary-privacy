import React from 'react';
import Table from './Table.js';
import './App.css';
import { IconTexture } from '@aws-amplify/ui-react';

let keys = [
    'risk',
    'name',
    'status',
    'classificationExpected',
    'classificationActual',
    'domain',
];

let headers = {
    'risk': 'Risk',
    'name': 'Name',
    'status': 'Status',
    'classificationExpected': 'Expected Classification',
    'classificationActual': 'Actual Classification',
    'domain': 'Domain',
};

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
                        keys: keys,
                        headers: headers,
                        rows: this.props.cookies,
                    }}
                />
            </>
        );
    }
}

export default CookiesPage;