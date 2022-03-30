import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';

let keys = [
    'url',
    'dateDetected',
    // 'formId',
    // 'policyExists',
];

let headers = {
    'dateDetected': 'Date Detected',
    'formId': 'Form ID',
    'url': 'URL',
    'policyExists': 'Privacy Policy Exists',
};

class FormsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Forms</h1>
                {this.props.newForms.length > 0 &&
                    <>
                        <h2>New</h2>
                        <Table
                            tableType="pages"
                            data={{
                                keys: keys,
                                headers: headers,
                                rows: this.props.newForms,
                            }}
                        />
                    </>
                }
                {this.props.existingForms.length > 0 &&
                    <>
                        <h2>Existing</h2>
                        <Table
                            tableType="pages"
                            data={{
                                keys: keys,
                                headers: headers,
                                rows: this.props.existingForms,
                            }}
                        />
                    </>
                }
            </>
        );
    }
}

export default FormsPage;