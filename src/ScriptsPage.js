import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';

let keys = [
    // 'scriptURL',
    'pageURL',
    'baseDomain',
    'dateDetected',
];

let headers = {
    'scriptURL': 'Script URL',
    'pageURL': 'Page URL',
    'baseDomain': 'Base Domain',
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
                {(this.props.newScripts.length > 0 || this.props.existingScripts.length > 0) &&
                    <Table
                        tableType="scripts"
                        data={{
                            keys,
                            headers,
                            newRows: this.props.newScripts,
                            existingRows: this.props.existingScripts,
                            newOrExistingColumn,
                        }}
                    />
                }
            </>
        );
    }
}

export default ScriptsPage;