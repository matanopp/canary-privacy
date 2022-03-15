import "./App.css";
import { Amplify, API, Auth } from "aws-amplify";
import Header from './Header.js';
import Sidebar from "./Sidebar.js";
import Overview from "./Overview.js";
import CookieTile from "./CookieTile.js";
import EmailTile from "./EmailTile.js";
import ChangeDetectionTile from "./ChangeDetectionTile";
import awsExports from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import React from "react";


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
            companyName: null,
            user: props.user
        };
    }

    componentDidMount() {
        this.getDashboardData();
    }

    render() {
        return (
            <>
                <Sidebar thisPage="home" />
                <div className="page-wrapper">
                    <Header domains={['domain1', 'domain2', 'domain3']} />
                    <div className="page-content">
                        <Overview
                            pages={5}
                            pagesTotal={13}
                            scripts={3}
                            scriptsTotal={10}
                            forms={0}
                            formsTotal={7}
                        />
                        {/* <div className="tests-wrapper"> */}
                        <CookieTile
                            highPriority={5 /*this.state.highPriorityCookies*/}
                            mediumPriority={7 /*this.state.mediumPriorityCookies*/}
                            lowPriority={2 /*this.state.lowPriorityCookies*/}
                        />
                        <EmailTile
                            afterGracePeriod={4 /*this.state.emailsAfterGracePeriod*/}
                            withinGracePeriod={6 /*this.state.emailsWithinGracePeriod*/}
                        />
                        {/* </div> */}
                        {/* <ChangeDetectionTile /> */}
                    </div>
                </div>
            </>
        );
    }
    async fetchDashboardDataFromAPI() {
        const apiName = "dashboard";
        const path = "/dashboards";
        const username = this.state.user.username
        try {
            const response = await API.get(apiName, path);
            return response.find((r) => r.username === username);
        } catch (error) {
            console.log(error);
            throw error.response.data;
        }
    }

    async getDashboardData() {
        if (!this.state.dashboardData) {
            let dashboardData = await this.fetchDashboardDataFromAPI();
            this.setState({ dashboardData: dashboardData });
        }

        let {
            overviewCookies,
            highPriorityCookies,
            mediumPriorityCookies,
            lowPriorityCookies,
        } = this.getCookies();

        let { overviewEmails, emailsAfterGracePeriod, emailsWithinGracePeriod } =
            this.getEmails();

        let { overviewChanges } = this.getChanges();

        let companyName = this.state.dashboardData.companyName;

        this.setState({
            overviewCookies,
            overviewEmails,
            overviewChanges,
            highPriorityCookies,
            mediumPriorityCookies,
            lowPriorityCookies,
            emailsAfterGracePeriod,
            emailsWithinGracePeriod,
            companyName,
        });
    }

    getCookies() {
        let cookiesData = this.state.dashboardData.domains[0].tests.cookies;
        return {
            overviewCookies:
                cookiesData.highPriorityCount +
                cookiesData.mediumPriorityCount +
                cookiesData.lowPriorityCount,
            highPriorityCookies: cookiesData.highPriorityCount,
            mediumPriorityCookies: cookiesData.mediumPriorityCount,
            lowPriorityCookies: cookiesData.lowPriorityCount,
        };
    }

    getEmails() {
        let emailsData = this.state.dashboardData.domains[0].tests.emails;
        return {
            overviewEmails:
                emailsData.nonCompliantEmailsAfterGracePeriod.length +
                emailsData.nonCompliantEmailsWithinGracePeriod.length,
            emailsAfterGracePeriod:
                emailsData.nonCompliantEmailsAfterGracePeriod.length,
            emailsWithinGracePeriod:
                emailsData.nonCompliantEmailsWithinGracePeriod.length,
        };
    }

    getChanges() {
        let changeDetectionData =
            this.state.dashboardData.domains[0].tests.changeDetection;

        let existingPages = changeDetectionData.pages.existing;
        let newPages = changeDetectionData.pages.new;

        let existingScripts = changeDetectionData.scripts.existing;
        let newScripts = changeDetectionData.scripts.new;

        let existingForms = changeDetectionData.forms.existing;
        let newForms = changeDetectionData.forms.new;

        return {
            overviewChanges:
                existingPages.length +
                newPages.length +
                existingScripts.length +
                newScripts.length +
                existingForms.length +
                newForms.length,
        };
    }
}

export default App;
