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


Amplify.configure(awsExports);
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            overviewCookies: null,
            overviewEmails: null,
            highPriorityCookiesCount: null,
            mediumPriorityCookiesCount: null,
            lowPriorityCookiesCount: null,
            emailsAfterGracePeriod: [],
            existingPages: [],
            newPages: [],
            existingScripts: [],
            newScripts: [],
            existingForms: [],
            newForms: [],
            companyName: null,
            user: props.user
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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <PageWrapper thisPage="dashboard" page={
                            this.state.isLoading ?
                                <h1>Loading...</h1> :
                                <Dashboard data={{
                                    newPages: this.state.newPages,
                                    existingPages: this.state.existingPages,
                                    newScripts: this.state.newScripts,
                                    existingScripts: this.state.existingScripts,
                                    newForms: this.state.newForms,
                                    existingForms: this.state.existingForms,
                                    highPriorityCookiesCount: this.state.highPriorityCookiesCount,
                                    mediumPriorityCookiesCount: this.state.mediumPriorityCookiesCount,
                                    lowPriorityCookiesCount: this.state.lowPriorityCookiesCount,
                                    emailsAfterGracePeriod: this.state.emailsAfterGracePeriod,
                                }} />
                        } />
                    } />
                    <Route path="cookies" element={
                        <PageWrapper thisPage="cookies" page={
                            <CookiesPage
                                mismanagedCookies={3}
                                misclassifiedCookies={5}
                            />
                        } />
                    } />
                    <Route path="emails" element={
                        <PageWrapper thisPage="emails" page={
                            <EmailsPage />
                        } />
                    } />
                    <Route path="pages" element={
                        <PageWrapper thisPage="pages" page={
                            <PagesPage />
                        } />
                    } />
                    <Route path="scripts" element={
                        <PageWrapper thisPage="scripts" page={
                            <ScriptsPage />
                        } />
                    } />
                    <Route path="forms" element={
                        <PageWrapper thisPage="forms" page={
                            <FormsPage />
                        } />
                    } />
                </Routes>
            </BrowserRouter>

        );
    }

    updateCurrentPage(newPage) {
        this.setState({ currentPage: newPage });
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

        let { existingPages, newPages, existingScripts, newScripts, existingForms, newForms } = this.getChanges();

        let companyName = this.state.dashboardData.companyName;

        this.setState({
            highPriorityCookiesCount: highPriorityCookiesCount,
            mediumPriorityCookiesCount: mediumPriorityCookiesCount,
            lowPriorityCookiesCount: lowPriorityCookiesCount,
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
