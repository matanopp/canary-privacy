import "./App.css";
import { Amplify, API, Auth } from "aws-amplify";
import awsExports from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageWrapper from "./PageWrapper.js";
import Dashboard from "./Dashboard.js";
import CookiesPage from "./CookiesPage.js";
import EmailsPage from "./EmailsPage.js";
import PagesPage from "./PagesPage.js";
import ScriptsPage from "./ScriptsPage.js";
import FormsPage from "./FormsPage.js";
import RawCookiesPage from "./RawCookiesPage";
import logoOnlyBlue from "./images/logo/logo-only-blue.png";
import _ from "lodash";

const HIGH_RISK = "HIGH";
const MEDIUM_RISK = "MEDIUM";
const LOW_RISK = "LOW";
const UNKNOWN_RISK = "UNKNOWN";
const STRICTLY_NECESSARY_CATEGORY = "Stricly Necessary";
const FUNCTIONAL_CATEGORY = "Functional";
const ANALYTICS_CATEGORY = "Analytics";
const MARKETING_CATEGORY = "Marketing";
const UNMANAGED_STATUS = "Unmanaged";
const MISCLASSIFIED_STATUS = "Misclassified";
const BASE_BUCKET_PATH = "https://canary-payloads.s3.us-east-1.amazonaws.com/"; 
const FORM_LIMIT_RATE = 0.6;

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
      existingRawCookies: [],
      newRawCookies: [],
      companyName: null,
      selectedDomain: 0,
      user: props.user,
      signOut: props.signOut,
      featureFlags: {
        isCookieComplianceEnabled: true,
        isEmailComplianceEnabled: true,
        isPagesEnabled: true,
        isScriptsEnabled: true,
        isFormsEnabled: true,
        isAllCookiesEnabled: true,
        isToDoListEnabled: true,
      },
    };
  }

  componentDidMount() {
    this.getDashboardData();
  }

  render() {
    return !this.state.dashboardData ? (
      <div className="loading-container">
        <img className="loading-image" src={logoOnlyBlue} alt="Loading..." />
      </div>
    ) : (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper
                thisPage="dashboard"
                domains={this.state.dashboardData.domains}
                selectedDomain={this.state.selectedDomain}
                updateSelectedDomain={this.updateSelectedDomain}
                page={
                  <Dashboard
                    featureFlags={this.state.featureFlags}
                    data={{
                      newPages: this.state.newPages,
                      existingPages: this.state.existingPages,
                      newScripts: this.state.newScripts,
                      existingScripts: this.state.existingScripts,
                      newForms: this.state.newForms,
                      existingForms: this.state.existingForms,
                      existingRawCookies: this.state.existingRawCookies,
                      newRawCookies: this.state.newRawCookies,
                      cookies: this.state.cookies,
                      emails: this.state.emails,
                      actionItems:
                        this.state.dashboardData.domains[
                          this.state.selectedDomain
                        ].actionItems,
                    }}
                  />
                }
                signOut={this.state.signOut}
                username={this.state.user.username}
                featureFlags={this.state.featureFlags}
              />
            }
          />
          <Route
            path="cookies"
            element={
              <PageWrapper
                thisPage="cookies"
                domains={this.state.dashboardData.domains}
                selectedDomain={this.state.selectedDomain}
                updateSelectedDomain={this.updateSelectedDomain}
                page={
                  <>
                    <CookiesPage cookies={this.state.cookies} />
                  </>
                }
                signOut={this.state.signOut}
                username={this.state.user.username}
                featureFlags={this.state.featureFlags}
              />
            }
          />
          <Route
            path="emails"
            element={
              <PageWrapper
                thisPage="emails"
                domains={this.state.dashboardData.domains}
                selectedDomain={this.state.selectedDomain}
                updateSelectedDomain={this.updateSelectedDomain}
                page={<EmailsPage emails={this.state.emails} />}
                signOut={this.state.signOut}
                username={this.state.user.username}
                featureFlags={this.state.featureFlags}
              />
            }
          />
          <Route
            path="pages"
            element={
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
                }
                signOut={this.state.signOut}
                username={this.state.user.username}
                featureFlags={this.state.featureFlags}
              />
            }
          />
          <Route
            path="scripts"
            element={
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
                }
                signOut={this.state.signOut}
                username={this.state.user.username}
                featureFlags={this.state.featureFlags}
              />
            }
          />
          <Route
            path="forms"
            element={
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
                }
                signOut={this.state.signOut}
                username={this.state.user.username}
                featureFlags={this.state.featureFlags}
              />
            }
          />
          <Route
            path="allCookies"
            element={
              <PageWrapper
                thisPage="allCookies"
                domains={this.state.dashboardData.domains}
                selectedDomain={this.state.selectedDomain}
                updateSelectedDomain={this.updateSelectedDomain}
                page={
                  <RawCookiesPage
                    newRawCookies={this.state.newRawCookies}
                    existingRawCookies={this.state.existingRawCookies}
                  />
                }
                signOut={this.state.signOut}
                username={this.state.user.username}
                featureFlags={this.state.featureFlags}
              />
            }
          />
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
    const username = this.state.user.username;
    try {
      const response = await API.get(apiName, path);
      return response.find((r) => r.username === username);
    } catch (error) {
      console.log(error);
      throw error.response.data;
    }
  }

  async fetchDashboardDataFromS3() {
    const username = this.state.user.username;
    let path = BASE_BUCKET_PATH + `${username}.json`;
    let res = await fetch(path)
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          console.log(error);
          throw error.response.data;
        }
      );
    return res;
  }

  async getDashboardData() {
    if (!this.state.dashboardData) {
      let dashboardData = await this.fetchDashboardDataFromS3();
      if (dashboardData.featureFlags) {
        this.setState({ featureFlags: dashboardData.featureFlags });
      }
      console.log(dashboardData.domains[0].actionItems);
      this.setState({ dashboardData: dashboardData });
    }

    let cookies = this.getCookies();
    let emails = this.getEmails();
    let {
      existingPages,
      newPages,
      existingScripts,
      newScripts,
      existingForms,
      newForms,
      existingRawCookies,
      newRawCookies,
    } = this.getChanges();
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
      existingRawCookies: existingRawCookies,
      newRawCookies: newRawCookies,
      companyName: companyName,
    });
  }
  getUnmanagedCookies(nonCompliantCookiesPerCategory) {
    let unmanagedCookies = [];
    for (let category of Object.keys(nonCompliantCookiesPerCategory)) {
      let cookiesForCategory = nonCompliantCookiesPerCategory[category];
      for (let cookie of cookiesForCategory) {
        if (
          this.isCookieInOtherCategory(
            cookie,
            category,
            nonCompliantCookiesPerCategory
          )
        ) {
          if (!this.isCookieInList(cookie, unmanagedCookies)) {
            unmanagedCookies.push(cookie);
          }
        }
      }
    }
    return unmanagedCookies;
  }

  isCookieInOtherCategory(cookie, category, nonCompliantCookiesPerCategory) {
    for (let cat of Object.keys(nonCompliantCookiesPerCategory).filter(
      (c) => c !== category
    )) {
      let cookiesInCategory = nonCompliantCookiesPerCategory[cat];
      if (this.isCookieInList(cookie, cookiesInCategory)) {
        return true;
      }
    }
  }

  isCookieInList(cookie, cookiesList) {
    return cookiesList.filter((c) => this.cookiesEqual(c, cookie)).length > 0;
  }
  cookiesEqual(cookie1, cookie2) {
    return cookie1.name === cookie2.name && cookie1.domain === cookie2.domain;
  }

  setCookiesRisk(cookies) {
    for (let cookie of cookies) {
      if (
        cookie.beforeOptIn ||
        (cookie.classificationExpected === MARKETING_CATEGORY &&
          (cookie.status === UNMANAGED_STATUS ||
            cookie.status === MISCLASSIFIED_STATUS)) ||
        (cookie.classificationExpected === ANALYTICS_CATEGORY &&
          (cookie.status === UNMANAGED_STATUS ||
            (cookie.status === MISCLASSIFIED_STATUS &&
              [FUNCTIONAL_CATEGORY, STRICTLY_NECESSARY_CATEGORY].includes(
                cookie.classificationActual
              ))))
      ) {
        cookie.risk = HIGH_RISK;
        continue;
      }

      if (
        cookie.classificationExpected === FUNCTIONAL_CATEGORY &&
        (cookie.status === UNMANAGED_STATUS ||
          (cookie.status === MISCLASSIFIED_STATUS &&
            cookie.classificationActual === STRICTLY_NECESSARY_CATEGORY))
      ) {
        cookie.risk = MEDIUM_RISK;
        continue;
      }

      if (
        (cookie.classificationExpected === ANALYTICS_CATEGORY &&
          cookie.status === MISCLASSIFIED_STATUS &&
          cookie.classificationActual === MARKETING_CATEGORY) ||
        (cookie.classificationExpected === FUNCTIONAL_CATEGORY &&
          cookie.status === MISCLASSIFIED_STATUS &&
          [ANALYTICS_CATEGORY, MARKETING_CATEGORY].includes(
            cookie.classificationActual
          ))
      ) {
        cookie.risk = LOW_RISK;
        continue;
      }
      cookie.risk = UNKNOWN_RISK;
    }
  }

  getCookies() {
    let cookiesData =
      this.state.dashboardData.domains[this.state.selectedDomain].tests.cookies;
    if (_.isEmpty(cookiesData)) return [];

    let _formatCookie = (
      c,
      classificationActual,
      status,
      nonCompliantCookiesOnPageLoad
    ) => {
      return {
        risk: c.priority.toUpperCase(),
        name: c.name,
        status: status,
        classificationExpected: c.type,
        classificationActual:
          status === MISCLASSIFIED_STATUS ? classificationActual : "",
        beforeOptIn:
          nonCompliantCookiesOnPageLoad &&
          this.isCookieInList(c, nonCompliantCookiesOnPageLoad),
        domain: c.domain,
      };
    };

    var formattedCookies = [];
    cookiesData.nonCompliantCookiesPerCategory[STRICTLY_NECESSARY_CATEGORY] =
      cookiesData.nonCompliantCookiesAfterRejection;
    let mismangedCookies = this.getUnmanagedCookies(
      cookiesData.nonCompliantCookiesPerCategory
    );
    mismangedCookies.forEach((c) =>
      formattedCookies.push(
        _formatCookie(
          c,
          "",
          UNMANAGED_STATUS,
          cookiesData.nonCompliantCookiesOnPageLoad
        )
      )
    );
    cookiesData.nonCompliantCookiesAfterRejection
      .filter((c) => !this.isCookieInList(c, mismangedCookies))
      .forEach((c) =>
        formattedCookies.push(
          _formatCookie(
            c,
            STRICTLY_NECESSARY_CATEGORY,
            MISCLASSIFIED_STATUS,
            cookiesData.nonCompliantCookiesOnPageLoad
          )
        )
      );
    cookiesData.nonCompliantCookiesPerCategory.Functional.filter(
      (c) => !this.isCookieInList(c, mismangedCookies)
    ).forEach((c) =>
      formattedCookies.push(
        _formatCookie(
          c,
          FUNCTIONAL_CATEGORY,
          MISCLASSIFIED_STATUS,
          cookiesData.nonCompliantCookiesOnPageLoad
        )
      )
    );
    cookiesData.nonCompliantCookiesPerCategory.Analytics.filter(
      (c) => !this.isCookieInList(c, mismangedCookies)
    ).forEach((c) =>
      formattedCookies.push(
        _formatCookie(
          c,
          ANALYTICS_CATEGORY,
          MISCLASSIFIED_STATUS,
          cookiesData.nonCompliantCookiesOnPageLoad
        )
      )
    );
    cookiesData.nonCompliantCookiesPerCategory.Marketing.filter(
      (c) => !this.isCookieInList(c, mismangedCookies)
    ).forEach((c) =>
      formattedCookies.push(
        _formatCookie(
          c,
          MARKETING_CATEGORY,
          MISCLASSIFIED_STATUS,
          cookiesData.nonCompliantCookiesOnPageLoad
        )
      )
    );
    if (cookiesData.nonCompliantCookiesOnPageLoad) {
      cookiesData.nonCompliantCookiesOnPageLoad.forEach((c) => {
        if (!this.isCookieInList(c, formattedCookies)) {
          let formattedCookie = _formatCookie(c);
          formattedCookie.beforeOptIn = true;
          formattedCookies.push(formattedCookie);
        }
      });
    }
    this.setCookiesRisk(formattedCookies);
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
    };
    return this.state.dashboardData.domains[
      this.state.selectedDomain
    ].tests.emails.map(_formatEmail);
  }

  getChanges() {
    let changeDetectionData =
      this.state.dashboardData.domains[this.state.selectedDomain].tests
        .changeDetection;

    let _formatPage = (p) => {
      return {
        url: p.url,
        dateDetected: new Date(p.dateDetected * 1000).toLocaleDateString(),
      };
    };

    let _formatScriptsList = (scriptBaseDomain, scripts) => {
      return {
        baseDomain: scriptBaseDomain,
        urls: _.uniq(scripts.map((s) => s.pageUrl)),
        scriptName: _.first(scripts).scriptName,
        scriptUrl: _.first(scripts).scriptUrl,
        dateDetected: new Date(
          _.first(scripts).dateDetected * 1000
        ).toLocaleDateString(),
      };
    };

    let _formatFormsList = (formId, forms) => {
      return {
        formId: formId,
        urls: _.uniq(forms.map((f) => f.url)),
        formText: _.first(forms).formText,
        dateDetected: new Date(
          _.first(forms).dateDetected * 1000
        ).toLocaleDateString(),
      };
    };

    let _filterForms = (forms, pageCount) => {
      //TODO: move to backend, make configurable      
      return forms.filter((f) => f.urls.length < FORM_LIMIT_RATE * pageCount);
    };

    let groupBy = (items, field, formatFunc) => {
      let groupedItems = _.groupBy(items, field);
      return Object.keys(groupedItems).map(function (itemId) {
        let itemInnerList = groupedItems[itemId];
        return formatFunc(itemId, itemInnerList);
      });
    };

    let _formatCookie = (c) => {
      c.dateDetectedParsed = new Date(
        c.dateDetected * 1000
      ).toLocaleDateString();
      return c;
    };

    let existingPages = _.uniq(
      changeDetectionData.pages
        .map(_formatPage)
    );
    let newPages = []; 

    let existingScripts = groupBy(
      changeDetectionData.scripts,
      "scriptBaseDomain",
      _formatScriptsList
    );
    let newScripts = [];

    let existingForms = _filterForms(
      groupBy(
        changeDetectionData.forms.filter((p) => p.status === "existing"),
        "formID",
        _formatFormsList
      ),
      existingPages.length + newPages.length
    );
    let newForms = _filterForms(
      groupBy(
        changeDetectionData.forms.filter((p) => p.status === "new"),
        "formID",
        _formatFormsList
      ),
      existingPages.length + newPages.length
    );

    let existingRawCookies = [];
    let newRawCookies = [];
    if (changeDetectionData.cookies) {
      newRawCookies = [];
      existingRawCookies = changeDetectionData.cookies.map(_formatCookie);
    }

    return {
      existingPages: existingPages,
      newPages: newPages,
      existingScripts: existingScripts,
      newScripts: newScripts,
      existingForms: existingForms,
      newForms: newForms,
      existingRawCookies: existingRawCookies,
      newRawCookies: newRawCookies,
    };
  }
}

export default App;
