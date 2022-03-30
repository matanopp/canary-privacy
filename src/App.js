import "./App.css";
import { Amplify, API, Auth } from "aws-amplify";
import awsExports from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import PageWrapper from './PageWrapper.js';
import Dashboard from './Dashboard.js';
import CookiesPage from './CookiesPage.js';
import EmailsPage from './EmailsPage.js';
import PagesPage from './PagesPage.js';
import ScriptsPage from './ScriptsPage.js';
import FormsPage from './FormsPage.js';
import logoOnlyBlue from './images/logo/logo-only-blue.png';


Amplify.configure(awsExports);
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            overviewCookies: null,
            overviewEmails: null,
            cookies: [],
            emailsAfterGracePeriod: [],
            existingPages: [],
            newPages: [],
            existingScripts: [],
            newScripts: [],
            existingForms: [],
            newForms: [],
            companyName: null,
            user: props.user,
        };
    }

    componentDidMount() {
        this.setState(
            { isLoading: true },
            () => this.getDashboardData()
        );
    }

    render() {
        return (
            this.state.isLoading ?
                <div className="loading-container">
                    <img className="loading-image" src={logoOnlyBlue} />
                </div>
                :
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <PageWrapper
                                thisPage="dashboard"
                                domains={this.state.dashboardData && this.state.dashboardData.domains}
                                page={
                                    <Dashboard data={{
                                        newPages: this.state.newPages,
                                        existingPages: this.state.existingPages,
                                        newScripts: this.state.newScripts,
                                        existingScripts: this.state.existingScripts,
                                        newForms: this.state.newForms,
                                        existingForms: this.state.existingForms,
                                        cookies: this.state.cookies,
                                        emailsAfterGracePeriod: this.state.emailsAfterGracePeriod,
                                    }} />
                                } />
                        } />
                        <Route path="cookies" element={
                            <PageWrapper
                                thisPage="cookies"
                                domains={this.state.dashboardData && this.state.dashboardData.domains}
                                page={
                                    <>
                                        <CookiesPage
                                            cookies={this.state.cookies}
                                        />
                                    </>
                                } />
                        } />
                        <Route path="emails" element={
                            <PageWrapper
                                thisPage="emails"
                                domains={this.state.dashboardData && this.state.dashboardData.domains}
                                page={
                                    <EmailsPage />
                                } />
                        } />
                        <Route path="pages" element={
                            <PageWrapper
                                thisPage="pages"
                                domains={this.state.dashboardData && this.state.dashboardData.domains}
                                page={
                                    <PagesPage />
                                } />
                        } />
                        <Route path="scripts" element={
                            <PageWrapper
                                thisPage="scripts"
                                domains={this.state.dashboardData && this.state.dashboardData.domains}
                                page={
                                    <ScriptsPage />
                                } />
                        } />
                        <Route path="forms" element={
                            <PageWrapper
                                thisPage="forms"
                                domains={this.state.dashboardData && this.state.dashboardData.domains}
                                page={
                                    <FormsPage />
                                } />
                        } />
                    </Routes>
                </BrowserRouter>
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
        let emailsAfterGracePeriod = this.getEmails();
        let { existingPages, newPages, existingScripts, newScripts, existingForms, newForms } = this.getChanges();
        let companyName = this.state.dashboardData.companyName;

        this.setState({
            cookies: cookiesData,
            emailsAfterGracePeriod: emailsAfterGracePeriod,
            existingPages: existingPages,
            newPages: newPages,
            existingScripts: existingScripts,
            newScripts: newScripts,
            existingForms: existingForms,
            newForms: newForms,
            companyName: companyName,
            isLoading: false,
        });
    }

    getCookies() {
        let cookiesData = this.state.dashboardData.domains[0].tests.cookies;
        let _formatCookie = (c) => {
            return {
                risk: c.priority,
                name: c.name,
                status: 'TODO', //TODO: calculate status (High, Medium, Low)
                classificationExpected: 'TODO', //TODO: calculate expected classification
                classificationActual: c.type,
                domain: c.domain,
            };
        }

        var formattedCookies = [];
        cookiesData.nonCompliantCookiesAfterRejection.forEach(c => formattedCookies.push(_formatCookie(c)));
        cookiesData.nonCompliantCookiesOnPageLoad.forEach(c => formattedCookies.push(_formatCookie(c)));
        cookiesData.nonCompliantCookiesPerCategory.Functional.forEach(c => formattedCookies.push(_formatCookie(c)));
        cookiesData.nonCompliantCookiesPerCategory.Analytics.forEach(c => formattedCookies.push(_formatCookie(c)));
        cookiesData.nonCompliantCookiesPerCategory.Marketing.forEach(c => formattedCookies.push(_formatCookie(c)));

        return formattedCookies;
    }

    getEmails() {
        let emailsData = this.state.dashboardData.domains[0].tests.emails;
        return emailsData;
    }

    getChanges() {
        let changeDetectionData =
            this.state.dashboardData.domains[0].tests.changeDetection;

        let existingPages = changeDetectionData.pages.filter(p => p.status === "existing");
        let newPages = changeDetectionData.pages.filter(p => p.status === "new");

        let existingScripts = changeDetectionData.scripts.filter(p => p.status === "existing");
        let newScripts = changeDetectionData.scripts.filter(p => p.status === "new");

        let existingForms = changeDetectionData.forms.filter(p => p.status === "existing");
        let newForms = changeDetectionData.forms.filter(p => p.status === "new");

        return {
            existingPages: existingPages,
            newPages: newPages,
            existingScripts: existingScripts,
            newScripts: newScripts,
            existingForms: existingForms,
            newForms: newForms
        };
    }
}

export default App;
