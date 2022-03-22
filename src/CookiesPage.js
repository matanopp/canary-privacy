import React from 'react';
import Table from './Table.js';
import './App.css';
import './CookiesPage.css';
import { IconTexture } from '@aws-amplify/ui-react';

class CookiesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'keys': [
                'risk',
                'name',
                'isMismanaged',
                'isMisclassified',
                'classificationExpected',
                'classificationActual',
                'domain',
            ],
            'headers': {
                'risk': 'Risk',
                'name': 'Name',
                'isMismanaged': 'Is Mismanaged',
                'isMisclassified': 'Is Misclassified',
                'classificationExpected': 'Expected Classification',
                'classificationActual': 'Actual Classification',
                'domain': 'Domain',
            },
            'cookies': [
                {
                    risk: 'High',
                    name: 'abc',
                    isMismanaged: true,
                    isMisclassified: true,
                    classificationExpected: 'Marketing',
                    classificationActual: 'Functional',
                    domain: 'mywebsite.com',
                },
                {
                    risk: 'Medium',
                    name: 'abc',
                    isMismanaged: false,
                    isMisclassified: true,
                    classificationExpected: 'Analytics',
                    classificationActual: 'Functional',
                    domain: 'mywebsite.com',
                },
                {
                    risk: 'Low',
                    name: 'abc',
                    isMismanaged: true,
                    isMisclassified: false,
                    classificationExpected: 'Marketing',
                    classificationActual: 'Marketing',
                    domain: 'mywebsite.com',
                },
            ]
        };
    }

    render() {
        return (
            <>
                <h1>Cookie Compliance</h1>
                <Table
                    tableType='cookies'
                    data={
                        {
                            keys: this.state.keys,
                            headers: this.state.headers,
                            rows: this.state.cookies,
                        }
                    }
                />
            </>
        );
    }
}

export default CookiesPage;