import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';
import _ from 'lodash';
import { pageConstants } from './pageConstants.js';

let newOrExistingColumn = 'dateDetected';

class ScriptsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Scripts</h1>
                <p>{this.props.newScripts.length} New Scripts, {this.props.newScripts.length + this.props.existingScripts.length} Total Scripts</p>
                {(this.props.newScripts.length > 0 || this.props.existingScripts.length > 0) &&
                    <Table
                        tableType="scripts"
                        data={{
                            keys: pageConstants.scripts.keys,
                            headers: pageConstants.scripts.headers,
                            tooltipDescriptions: pageConstants.scripts.tooltipDescriptions,
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