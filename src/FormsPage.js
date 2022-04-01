import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';

let keys = [
    'formId',
    'urls',
    'formText',
    'dateDetected',
    // 'formId',
    // 'policyExists',
];

let headers = {
    'formId': 'Form ID',
    'urls': 'Pages',
    'formText': 'Form Text',
    'dateDetected': 'Date Detected',
    // 'policyExists': 'Privacy Policy Exists',
};

let newOrExistingColumn = 'dateDetected';

class FormsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Forms</h1>
                {(this.props.newForms.length > 0 || this.props.existingForms.length > 0) &&
                    <Table
                        tableType="pages"
                        data={{
                            keys,
                            headers,
                            newRows: this.props.newForms,
                            existingRows: this.props.existingForms,
                            newOrExistingColumn,
                        }}
                    />
                }
            </>
        );
    }
}

export default FormsPage;