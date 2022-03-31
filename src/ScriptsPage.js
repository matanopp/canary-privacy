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

class PagesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Scripts</h1>
                {this.props.newScripts.length > 0 &&
                    <>
                        <h2>New</h2>
                        <Table
                            tableType="scripts"
                            data={{
                                keys: keys,
                                headers: headers,
                                rows: this.props.newScripts,
                            }}
                        />
                    </>
                }
                {this.props.existingScripts.length > 0 &&
                    <>
                        <h2>Existing</h2>
                        <Table
                            tableType="scripts"
                            data={{
                                keys: keys,
                                headers: headers,
                                rows: this.props.existingScripts,
                            }}
                        />
                    </>
                }
            </>
        );
    }
}

export default PagesPage;