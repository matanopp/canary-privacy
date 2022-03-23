import { Flex } from '@aws-amplify/ui-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Table from './Table.js';
import './ChangeDetection.css';

class ChangeDetectionPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Change Detection</h1>
                {/* <div className="change-detection-wrapper"> */}
                <div className="change-detection-tabs">
                    <Link className={this.props.selectedPage === 'pages' ? "tab selected" : "tab unselected"} to="/pages">
                        <p>Pages</p>
                    </Link>
                    <Link className={this.props.selectedPage === 'scripts' ? "tab selected" : "tab unselected"} to="/scripts">
                        <p>Scripts</p>
                    </Link>
                    <Link className={this.props.selectedPage === 'forms' ? "tab selected" : "tab unselected"} to="/forms">
                        <p>Forms</p>
                    </Link>
                </div>
                {this.props.selectedPage === 'pages' &&
                    <Table
                        tableType="pages"
                        data={{
                            'keys': [
                                'done',
                                'url',
                                'privacyPolicy',
                                'version',
                            ],
                            'headers': {
                                'done': 'Done',
                                'url': 'URL',
                                'privacyPolicy': 'Privacy Policy',
                                'version': 'Version',
                            },
                            'rows': [
                                {
                                    'done': false,
                                    'url': 'abc.com',
                                    'privacyPolicy': 'ABSENT',
                                    'version': '1.0',
                                },
                                {
                                    'done': true,
                                    'url': 'abc.com/1',
                                    'privacyPolicy': 'OK',
                                    'version': '1.0',
                                },
                                {
                                    'done': false,
                                    'url': 'abc.com/2',
                                    'privacyPolicy': 'OLD VERSION',
                                    'version': '1.0',
                                },
                            ],
                        }}
                    />
                }
                {/* </div> */}
            </>
        );
    }
}

export default ChangeDetectionPage;