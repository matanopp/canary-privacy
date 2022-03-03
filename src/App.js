import './App.css';
import { Amplify } from 'aws-amplify';
import logoOnlyBlue from './logo/logo-only-blue.png';
import OverviewTile from './OverviewTile.js'
import CookieTile from './CookieTile.js';
import EmailTile from './EmailTile.js';
import ChangeDetectionTile from './ChangeDetectionTile';
import Dashboards from "./Dashboards";

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
            <div id="home-wrapper">
                <div id="home-sidebar">
                    <a href="/">
                        <img class="logoOnly" src={logoOnlyBlue} alt="Logo Only Blue" />
                    </a>
                </div>
                <div id="home">
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
            overviewCookies: 10,
            highPriorityCookies: 5,
            mediumPriorityCookies: 2,
            lowPriorityCookies: 3,
        };
    }

    getEmails() {
        return {
            overviewEmails: 24,
            emailsAfterGracePeriod: 5,
            emailsWithinGracePeriod: 19,
        }
    }

    getChanges() {
        return {
            overviewChanges: 30,
        };
    }
}

export default withAuthenticator(App);
