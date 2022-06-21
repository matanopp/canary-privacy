import React from "react";
import Overview from "./Overview.js";
import CookieTile from "./CookieTile.js";
import EmailTile from "./EmailTile.js";
import ToDoList from "./ToDoList.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="dashboard-content">
          <div id="change-detection-container" className="db-container">
            <div>
              {(this.props.featureFlags.isPagesEnabled === true ||
                this.props.featureFlags.isScriptsEnabled === true ||
                this.props.featureFlags.isFormsEnabled === true ||
                this.props.featureFlags.isAllCookiesEnabled === true) ===
                true && <h1>Change Detection</h1>}
              <p className="title-description">
                Changes detected since the last scan
              </p>
            </div>

            <Overview
              pages={this.props.data.newPages.length}
              pagesTotal={
                this.props.data.newPages.length +
                this.props.data.existingPages.length
              }
              scripts={this.props.data.newScripts.length}
              scriptsTotal={
                this.props.data.newScripts.length +
                this.props.data.existingScripts.length
              }
              forms={this.props.data.newForms.length}
              formsTotal={
                this.props.data.newForms.length +
                this.props.data.existingForms.length
              }
              cookies={this.props.data.newRawCookies.length}
              cookiesTotal={
                this.props.data.newRawCookies.length +
                this.props.data.existingRawCookies.length
              }
              featureFlags={this.props.featureFlags}
            />
          </div>
          <div id="compliance-tracking-container" className="db-container">
            {(this.props.featureFlags.isCookieComplianceEnabled === true ||
              this.props.featureFlags.isEmailComplianceEnabled === true) && (
              <h1>Compliance Tracking</h1>
            )}
            <div className="tests-wrapper">
              {this.props.featureFlags.isCookieComplianceEnabled === true && (
                <CookieTile
                  highPriority={
                    this.props.data.cookies.filter(
                      (c) => c.risk.toUpperCase() === "HIGH"
                    ).length
                  }
                  mediumPriority={
                    this.props.data.cookies.filter(
                      (c) => c.risk.toUpperCase() === "MEDIUM"
                    ).length
                  }
                  lowPriority={
                    this.props.data.cookies.filter(
                      (c) => c.risk.toUpperCase() === "LOW"
                    ).length
                  }
                  // highPriority={0}
                  // mediumPriority={0}
                  // lowPriority={0}
                />
              )}
              {this.props.featureFlags.isEmailComplianceEnabled === true && (
                <EmailTile
                  nonCompliant={
                    this.props.data.emails.filter(
                      (e) => e.priority.toUpperCase() === "ALERT"
                    ).length
                  } //TODO: how do we calculate these?
                  activeTests={
                    this.props.data.emails.filter(
                      (e) => e.priority.toUpperCase() === "OK"
                    ).length
                  } //TODO: how do we calculate these?
                  // nonCompliant={1}
                  // activeTests={3}
                />
              )}
            </div>
          </div>
          {this.props.featureFlags.isToDoListEnabled === true && (
            <ToDoList actionItems={this.props.data.actionItems} />
          )}
        </div>
      </>
    );
  }
}

export default Dashboard;
