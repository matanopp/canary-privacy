import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';
import _ from 'lodash'

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
    'formText': 'Data Elements',
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
                        tableType="forms"
                        data={{
                            keys,
                            headers,
                            newRows: _.orderBy(this.props.newForms, (s)=>s.urls.length, "desc"),
                            existingRows: _.orderBy(this.props.existingForms, (s)=>s.urls.length, "desc"),
                            newOrExistingColumn,
                        }}
                    />
                }
            </>
        );
    }
}

export default FormsPage;