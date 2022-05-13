import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';
import _ from 'lodash'
import { pageConstants } from './pageConstants.js';

let newOrExistingColumn = 'dateDetected';

class FormsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Forms</h1>
                <p>{this.props.newForms.length} New Forms, {this.props.newForms.length + this.props.existingForms.length} Total Forms</p>
                {(this.props.newForms.length > 0 || this.props.existingForms.length > 0) &&
                    <Table
                        tableType="forms"
                        data={{
                            keys: pageConstants.forms.keys,
                            headers: pageConstants.forms.headers,
                            tooltipDescriptions: pageConstants.forms.tooltipDescriptions,
                            newRows: _.orderBy(this.props.newForms, (s) => s.urls.length, "desc"),
                            existingRows: _.orderBy(this.props.existingForms, (s) => s.urls.length, "desc"),
                            newOrExistingColumn,
                        }}
                    />
                }
            </>
        );
    }
}

export default FormsPage;