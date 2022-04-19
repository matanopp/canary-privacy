import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';
import _ from 'lodash';

let keys = [
    'scriptName',
    'baseDomain',
    'scriptUrl',
    'urls',
    'dateDetected',
];

let headers = {
    'scriptName': 'Script Name',
    'baseDomain': 'Base Domain',
    'scriptUrl': 'Script URL',
    'urls': 'Pages',
    'dateDetected': 'Date Detected',
};

let newOrExistingColumn = 'dateDetected';

class ScriptsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Scripts</h1>
                <p>{this.props.newScripts.length} New Pages, {this.props.newScripts.length + this.props.existingScripts.length} Total Pages</p>
                {(this.props.newScripts.length > 0 || this.props.existingScripts.length > 0) &&
                    <Table
                        tableType="scripts"
                        data={{
                            keys,
                            headers,
                            newRows: _.orderBy(this.props.newScripts, (s) => s.urls.length, "desc"),
                            existingRows: _.orderBy(this.props.existingScripts, (s) => s.urls.length, "desc"),
                            newOrExistingColumn,
                        }}
                    />
                }
            </>
        );
    }
}

export default ScriptsPage;