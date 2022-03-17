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
            highPriorityCookiesCount: null,
            mediumPriorityCookiesCount: null,
            lowPriorityCookiesCount: null,
            emailsAfterGracePeriod: [],
            existingPages: [],
            newPages: [],
            existingScripts : [],
            newScripts : [],
            existingForms : [],
            newForms : [],
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
                            pages={this.state.newPages.length}
                            pagesTotal={this.state.newPages.length + this.state.existingPages.length}
                            scripts={this.state.newScripts.length}
                            scriptsTotal={this.state.newScripts.length + this.state.existingScripts.length}
                            forms={this.state.newForms.length}
                            formsTotal={this.state.newForms.length + this.state.existingForms.length}
                        />
                        {/* <div className="tests-wrapper"> */}
                        <CookieTile
                            highPriority={this.state.highPriorityCookiesCount}
                            mediumPriority={this.state.mediumPriorityCookiesCount}
                            lowPriority={this.state.lowPriorityCookiesCount}
                        />
                        <EmailTile
                            afterGracePeriod={this.state.emailsAfterGracePeriod.length}
                            withinGracePeriod={0}
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

        let cookiesData = this.getCookies();
        let highPriorityCookiesCount = cookiesData.highPriorityCount
        let mediumPriorityCookiesCount = cookiesData.mediumPriorityCount;
        let lowPriorityCookiesCount = cookiesData.lowPriorityCount;

        let emailsAfterGracePeriod = this.getEmails();

        let { existingPages, newPages, existingScripts,newScripts, existingForms, newForms } = this.getChanges();

        let companyName = this.state.dashboardData.companyName;

        this.setState({
            highPriorityCookiesCount : highPriorityCookiesCount,
            mediumPriorityCookiesCount : mediumPriorityCookiesCount,
            lowPriorityCookiesCount : lowPriorityCookiesCount,
            emailsAfterGracePeriod : emailsAfterGracePeriod,
            existingPages: existingPages,
            newPages: newPages,
            existingScripts : existingScripts,
            newScripts : newScripts,
            existingForms : existingForms,
            newForms : newForms,
            companyName : companyName
        });
    }

    getCookies() {
        let cookiesData = this.state.dashboardData.domains[0].tests.cookies;
        return {
            highPriorityCount: cookiesData.highPriorityCount,
            mediumPriorityCount: cookiesData.mediumPriorityCount,
            lowPriorityCount: cookiesData.lowPriorityCount,
        };
    }

    getEmails() {
        let emailsData = this.state.dashboardData.domains[0].tests.emails;
        return emailsData;
    }

    getChanges() {
        let changeDetectionData =
            this.state.dashboardData.domains[0].tests.changeDetection;

        let existingPages = changeDetectionData.pages.filter(p=>p.status === "existing");
        let newPages = changeDetectionData.pages.filter(p=>p.status === "new");

        let existingScripts = changeDetectionData.scripts.filter(p=>p.status === "existing");
        let newScripts = changeDetectionData.scripts.filter(p=>p.status === "new");

        let existingForms = changeDetectionData.forms.filter(p=>p.status === "existing");
        let newForms = changeDetectionData.forms.filter(p=>p.status === "new");

        return {
            existingPages: existingPages,
            newPages: newPages,
            existingScripts : existingScripts,
            newScripts : newScripts,
            existingForms : existingForms,
            newForms : newForms
        };
    }
}

export default App;
