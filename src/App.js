import './App.css';
import { Amplify } from 'aws-amplify';
import OverviewTile from './OverviewTile.js'
import CookieTile from './CookieTile.js';
import EmailTile from './EmailTile.js';
import ChangeDetectionTile from './ChangeDetectionTile';
import Dashboards from "./Dashboards";
import { Link } from "react-router-dom";
import Sidebar from './Sidebar.js';

import awsExports from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import React from 'react';
Amplify.configure(awsExports);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overviewCookies: null,
            overviewEmails: null,
            overviewChanges: null,
            highPriorityCookies: null,
            mediumPriorityCookies: null,
            lowPriorityCookies: null,
            emailsAfterGracePeriod: null,
            emailsWithinGracePeriod: null,

        };
    }

    componentDidMount() {
        this.getDashboardData();
    }

    render() {
        return (
            <div className="page-wrapper">
                <Sidebar thisPage="home" />
                <div className="page-content">
                    <div className="header">
                        <h1>Company Name</h1>
                    </div>
                    <OverviewTile
                        cookies={this.state.overviewCookies}
                        emails={this.state.overviewEmails}
                        changes={this.state.overviewChanges}
                    />
                    <div className="tests-wrapper">
                        <CookieTile
                            highPriority={this.state.highPriorityCookies}
                            mediumPriority={this.state.mediumPriorityCookies}
                            lowPriority={this.state.lowPriorityCookies}
                        />
                        <EmailTile
                            afterGracePeriod={this.state.emailsAfterGracePeriod}
                            withinGracePeriod={this.state.emailsWithinGracePeriod}
                        />
                    </div>
                    <ChangeDetectionTile />
                </div>
            </div>
        );
    }

    getDashboardData() {
        let {
            overviewCookies,
            highPriorityCookies,
            mediumPriorityCookies,
            lowPriorityCookies
        } = this.getCookies();

        let {
            overviewEmails,
            emailsAfterGracePeriod,
            emailsWithinGracePeriod,
        } = this.getEmails();

        let {
            overviewChanges
        } = this.getChanges();

        this.setState({
            overviewCookies,
            overviewEmails,
            overviewChanges,
            highPriorityCookies,
            mediumPriorityCookies,
            lowPriorityCookies,
            emailsAfterGracePeriod,
            emailsWithinGracePeriod,
        });

    }

    getCookies() {
        return {
            overviewCookies: 11,
            highPriorityCookies: 3,
            mediumPriorityCookies: 3,
            lowPriorityCookies: 5,
        };
    }

    getEmails() {
        return {
            overviewEmails: 8,
            emailsAfterGracePeriod: 3,
            emailsWithinGracePeriod: 5,
        }
    }

    getChanges() {
        return {
            overviewChanges: 30,
        };
    }
}

export default withAuthenticator(App);
