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
    'beforeOptIn',
    'domain',
];

let headers = {
    'risk': 'Risk',
    'name': 'Name',
    'status': 'Status',
    'classificationExpected': 'Expected Classification',
    'classificationActual': 'Actual Classification',
    'beforeOptIn': 'Served Before Opt-In',
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
                        keys,
                        headers,
                        existingRows: this.props.cookies,
                    }}
                />
            </>
        );
    }
}

export default CookiesPage;