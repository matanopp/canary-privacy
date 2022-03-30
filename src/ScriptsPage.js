import React from 'react';
import Table from './Table.js';
import './ChangeDetection.css';

let keys = [
    'scriptURL',
    'page',
    'dateDetected',
];

let headers = {
    'dateDetected': 'Date Detected',
    'scriptURL': 'Script URL',
    'page': 'Page',
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