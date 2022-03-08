import './App.css';
import { Amplify, API } from 'aws-amplify';
import logoOnlyBlue from './images/logo/logo-only-blue.png';
import changeDetectionIcon from './images/change-detection.png';
import cookieIcon from './images/cookie.png';
import emailIcon from './images/email.png';
import homeIcon from './images/home.png';
import OverviewTile from './OverviewTile.js'
import CookieTile from './CookieTile.js';
import EmailTile from './EmailTile.js';
import ChangeDetectionTile from './ChangeDetectionTile';

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
                    <img className="logoOnly" src={logoOnlyBlue} alt="Logo Only Blue" />
                    <div className="iconBackground">
                        <img className="icon" src={homeIcon} alt="Logo Only Blue" />
                    </div>
                    <div className="iconBackground">
                        <img className="icon" src={cookieIcon} alt="Logo Only Blue" />
                    </div>
                    <div className="iconBackground">
                        <img className="icon" src={emailIcon} alt="Logo Only Blue" />
                    </div>
                    <div className="iconBackground">
                        <img className="icon" src={changeDetectionIcon} alt="Logo Only Blue" />
                    </div>
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
    async fetchDashboardDataFromAPI() {
        const apiName = "dashboard";
        const path = "/dashboards";
        const userId = "1985" // TODO: get from the auth component
        try {
            const response = await API.get(apiName, path);
            let userResults = response.filter(r=>r.userId === userId);
            if(userResults.length > 0) {
                return userResults[0]
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            throw error.response.data;
        }
    }
    
    async getDashboardData() {    
        if(!this.state.dashboardData) {
            let dashboardData = await this.fetchDashboardDataFromAPI();
            this.setState({dashboardData : dashboardData});
        } 

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
        let cookiesData = this.state.dashboardData.tests.cookies;
        return {
            overviewCookies: cookiesData.highPriorityCount + cookiesData.mediumPriorityCount + cookiesData.lowPriorityCount,
            highPriorityCookies: cookiesData.highPriorityCount,
            mediumPriorityCookies: cookiesData.mediumPriorityCount,
            lowPriorityCookies: cookiesData.lowPriorityCount,
        };
    }

    getEmails() {
        let emailsData = this.state.dashboardData.tests.emails;
        return {
            overviewEmails: emailsData.nonCompliantEmailsAfterGracePeriod.length + emailsData.nonCompliantEmailsWithinGracePeriod.length,
            emailsAfterGracePeriod: emailsData.nonCompliantEmailsAfterGracePeriod.length,
            emailsWithinGracePeriod: emailsData.nonCompliantEmailsWithinGracePeriod.length ,
        }
    }

    getChanges() {
        return {
            overviewChanges: 30,
        };
    }
}

export default withAuthenticator(App);
