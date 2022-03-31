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
        this.updateSelectedDomain.bind(this);
        this.state = {
            overviewCookies: null,
            overviewEmails: null,
            cookies: [],
            emails: [],
            existingPages: [],
            newPages: [],
            existingScripts: [],
            newScripts: [],
            existingForms: [],
            newForms: [],
            companyName: null,
            selectedDomain: 0,
            user: props.user,
        };
    }

    componentDidMount() {
        this.getDashboardData();
    }

    render() {
        return (
            !this.state.dashboardData ?
                <div className="loading-container">
                    <img className="loading-image" src={logoOnlyBlue} alt="Loading..." />
                </div>
                :
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <PageWrapper
                                thisPage="dashboard"
                                domains={this.state.dashboardData.domains}
                                selectedDomain={this.state.selectedDomain}
                                updateSelectedDomain={this.updateSelectedDomain}
                                page={
                                    <Dashboard data={{
                                        newPages: this.state.newPages,
                                        existingPages: this.state.existingPages,
                                        newScripts: this.state.newScripts,
                                        existingScripts: this.state.existingScripts,
                                        newForms: this.state.newForms,
                                        existingForms: this.state.existingForms,
                                        cookies: this.state.cookies,
                                        emails: this.state.emails,
                                    }} />
                                } />
                        } />
                        <Route path="cookies" element={
                            <PageWrapper
                                thisPage="cookies"
                                domains={this.state.dashboardData.domains}
                                selectedDomain={this.state.selectedDomain}
                                updateSelectedDomain={this.updateSelectedDomain}
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
                                domains={this.state.dashboardData.domains}
                                selectedDomain={this.state.selectedDomain}
                                updateSelectedDomain={this.updateSelectedDomain}
                                page={
                                    <EmailsPage
                                        emails={this.state.emails}
                                    />
                                } />
                        } />
                        <Route path="pages" element={
                            <PageWrapper
                                thisPage="pages"
                                domains={this.state.dashboardData.domains}
                                selectedDomain={this.state.selectedDomain}
                                updateSelectedDomain={this.updateSelectedDomain}
                                page={
                                    <PagesPage
                                        newPages={this.state.newPages}
                                        existingPages={this.state.existingPages}
                                    />
                                } />
                        } />
                        <Route path="scripts" element={
                            <PageWrapper
                                thisPage="scripts"
                                domains={this.state.dashboardData.domains}
                                selectedDomain={this.state.selectedDomain}
                                updateSelectedDomain={this.updateSelectedDomain}
                                page={
                                    <ScriptsPage
                                        newScripts={this.state.newScripts}
                                        existingScripts={this.state.existingScripts}
                                    />
                                } />
                        } />
                        <Route path="forms" element={
                            <PageWrapper
                                thisPage="forms"
                                domains={this.state.dashboardData.domains}
                                selectedDomain={this.state.selectedDomain}
                                updateSelectedDomain={this.updateSelectedDomain}
                                page={
                                    <FormsPage
                                        newForms={this.state.newForms}
                                        existingForms={this.state.existingForms}
                                    />
                                } />
                        } />
                    </Routes>
                </BrowserRouter>
        );
    }

    updateSelectedDomain = (newDomain) => {
        this.setState({ selectedDomain: newDomain }, () => this.getDashboardData());
    };

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
            // for (let i = 0; i < 9; i++) {
            //     dashboardData.domains.push({
            //         domainName: 'domain' + (i + 1) + '.com',
            //         tests: {
            //             emails: [],
            //             changeDetection: {
            //                 scripts: [],
            //                 forms: [],
            //                 pages: [],
            //             },
            //             cookies: {
            //                 nonCompliantCookiesAfterRejection: [],
            //                 nonCompliantCookiesOnPageLoad: [],
            //                 nonCompliantCookiesPerCategory: {
            //                     Functional: [],
            //                     Marketing: [],
            //                     Analytics: [],
            //                 },
            //             },
            //         },
            //     });
            // }
            this.setState({ dashboardData: dashboardData });
        }

        let cookies = this.getCookies();
        let emails = this.getEmails();
        let { existingPages, newPages, existingScripts, newScripts, existingForms, newForms } = this.getChanges();
        let companyName = this.state.dashboardData.companyName;

        this.setState({
            cookies: cookies,
            emails: emails,
            existingPages: existingPages,
            newPages: newPages,
            existingScripts: existingScripts,
            newScripts: newScripts,
            existingForms: existingForms,
            newForms: newForms,
            companyName: companyName,
        });
    }

    getCookies() {
        let cookiesData = this.state.dashboardData.domains[this.state.selectedDomain].tests.cookies;

        let _formatCookie = (c, onPageLoad = false) => {
            return {
                risk: c.priority.toUpperCase(),
                name: c.name,
                status: 'TODO', //TODO: calculate status (HIGH, MEDIUM, LOW)
                classificationExpected: 'TODO', //TODO: calculate expected classification
                classificationActual: c.type,
                beforeOptIn: onPageLoad,
                domain: c.domain,
            };
        }

        var formattedCookies = [];
        cookiesData.nonCompliantCookiesAfterRejection.forEach(c => formattedCookies.push(_formatCookie(c)));
        cookiesData.nonCompliantCookiesOnPageLoad.forEach(c => formattedCookies.push(_formatCookie(c, true)));
        cookiesData.nonCompliantCookiesPerCategory.Functional.forEach(c => formattedCookies.push(_formatCookie(c)));
        cookiesData.nonCompliantCookiesPerCategory.Analytics.forEach(c => formattedCookies.push(_formatCookie(c)));
        cookiesData.nonCompliantCookiesPerCategory.Marketing.forEach(c => formattedCookies.push(_formatCookie(c)));
        return formattedCookies;
    }

    getEmails() {
        let _formatEmail = (e) => {
            return {
                priority: e.status.toUpperCase(),
                testAddress: e.testEmail,
                testDate: e.testDate,
                testPage: e.testPage,
                emailsReceived: e.numberOfEmailsReceived,
                senderAddress: e.senderAddress,
            };
        }
        return this.state.dashboardData.domains[this.state.selectedDomain].tests.emails.map(_formatEmail);
    }

    getChanges() {
        let changeDetectionData =
            this.state.dashboardData.domains[this.state.selectedDomain].tests.changeDetection;

        let _formatPage = (p) => {
            return {
                'url': p.url,
                'dateDetected': p.dateDetected,
            };
        }

        let _formatScript = (s) => {
            return {
                'dateDetected': s.dateDetected,
                'scriptURL': s.scriptUrl,
                'pageURL': s.pageUrl instanceof Array ? s.pageUrl : [s.pageUrl],  //TODO: this should be updated to list of pages once updated in database
                'baseDomain': s.scriptBaseDomain, //TODO: this doesn't exist yet but will soon
            };
        }

        let _formatForm = (f) => {
            return {
                'dateDetected': f.dateDetected,
                'formId': f.formID,
                'formText': f.formText, //TODO: this doesn't exist yet but will soon
                'url': f.url,
                'policyExists': f.privacyPolicyExists,
            };
        }

        let existingPages = changeDetectionData.pages.filter(p => p.status === "existing").map(_formatPage);
        let newPages = changeDetectionData.pages.filter(p => p.status === "new").map(_formatPage);

        let existingScripts = changeDetectionData.scripts.filter(p => p.status === "existing").map(_formatScript);
        let newScripts = changeDetectionData.scripts.filter(p => p.status === "new").map(_formatScript);

        let existingForms = changeDetectionData.forms.filter(p => p.status === "existing").map(_formatForm);
        let newForms = changeDetectionData.forms.filter(p => p.status === "new").map(_formatForm);

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
