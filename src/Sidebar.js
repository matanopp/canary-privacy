import "./App.css";
import { Link } from "react-router-dom";
import logoTextBlue from "./images/logo/logo-text-blue.png";
// import changeDetectionIconBlue from './images/sidebar/change-detection-blue.svg';
// import changeDetectionIconGray from './images/sidebar/change-detection-gray.svg';
import cookieIconBlue from "./images/sidebar/blue/cookie-blue.svg";
import cookieIconGray from "./images/sidebar/gray/cookie.svg";
import emailIconBlue from "./images/sidebar/blue/email-blue.svg";
import emailIconGray from "./images/sidebar/gray/email.svg";
import dashboardIconBlue from "./images/sidebar/blue/dashboard-blue.svg";
import dashboardIconGray from "./images/sidebar/gray/dashboard.svg";
import pageIconBlue from "./images/sidebar/blue/page-blue.svg";
import pageIconGray from "./images/sidebar/gray/page.svg";
import formIconBlue from "./images/sidebar/blue/form-blue.svg";
import formIconGray from "./images/sidebar/gray/form.svg";
import scriptIconBlue from "./images/sidebar/blue/script-blue.svg";
import scriptIconGray from "./images/sidebar/gray/script.svg";
import React from "react";
import { click } from "@testing-library/user-event/dist/click";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <img className="logo" src={logoTextBlue} alt="Logo Text Blue" />
        <Link className="sidebar-item" to="/">
          {this.props.thisPage === "dashboard" ? (
            <>
              <div className="icon-background-selected icon-background">
                <img
                  className="icon"
                  src={dashboardIconBlue}
                  alt="Dashboard Icon Blue"
                />
                <p className="sidebar-text-selected">Dashboard</p>
              </div>
            </>
          ) : (
            <>
              <div className="icon-background">
                <img
                  className="icon"
                  src={dashboardIconGray}
                  alt="Dashboard Icon Gray"
                />
                <p className="sidebar-text">Dashboard</p>
              </div>
            </>
          )}
        </Link>
        <div
          style={{ height: "2px", width: "100%", backgroundColor: "#F0F0F5" }}
        />
        {(this.props.featureFlags.isCookieComplianceEnabled === true ||
          this.props.featureFlags.isEmailComplianceEnabled === true) && (
          <h1>COMPLIANCE TESTING</h1>
        )}
        {this.props.featureFlags.isCookieComplianceEnabled === true && (
          <Link className="sidebar-item" to="/cookies" id="test">
            {this.props.thisPage === "cookies" ? (
              <>
                <div className="icon-background-selected icon-background">
                  <img
                    className="icon"
                    src={cookieIconBlue}
                    alt="Cookie Icon Blue"
                  />
                  <p className="sidebar-text-selected">Cookie Compliance</p>
                </div>
              </>
            ) : (
              <>
                <div className="icon-background">
                  <img
                    className="icon"
                    src={cookieIconGray}
                    alt="Cookie Icon Gray"
                  />
                  <p className="sidebar-text">Cookie Compliance</p>
                </div>
              </>
            )}
          </Link>
        )}
        {this.props.featureFlags.isEmailComplianceEnabled === true && (
          <Link className="sidebar-item" to="/emails">
            {this.props.thisPage === "emails" ? (
              <>
                <div className="icon-background-selected icon-background">
                  <img
                    className="icon"
                    src={emailIconBlue}
                    alt="Email Icon Blue"
                  />
                  <p className="sidebar-text-selected">Email Compliance</p>
                </div>
              </>
            ) : (
              <>
                <div className="icon-background">
                  <img
                    className="icon"
                    src={emailIconGray}
                    alt="Email Icon Gray"
                  />
                  <p className="sidebar-text">Email Compliance</p>
                </div>
              </>
            )}
          </Link>
        )}
        <div
          style={{ height: "2px", width: "100%", backgroundColor: "#F0F0F5" }}
        />
        {(this.props.featureFlags.isPagesEnabled === true ||
          this.props.featureFlags.isScriptsEnabled === true || 
          this.props.featureFlags.isFormsEnabled === true ||
          this.props.featureFlags.isAllCookiesEnabled === true) && (
          <h1>CHANGE DETECTION</h1>
        )}
        {this.props.featureFlags.isPagesEnabled === true && (
          <Link className="sidebar-item" to="/pages">
            {this.props.thisPage === "pages" ? (
              <>
                <div className="icon-background icon-background-selected">
                  <img
                    className="icon"
                    src={pageIconBlue}
                    alt="Page Icon Blue"
                  />
                  <p className="sidebar-text-selected">Pages</p>
                </div>
              </>
            ) : (
              <>
                <div className="icon-background">
                  <img
                    className="icon"
                    src={pageIconGray}
                    alt="Page Icon Blue"
                  />
                  <p className="sidebar-text">Pages</p>
                </div>
              </>
            )}
          </Link>
        )}
        {this.props.featureFlags.isScriptsEnabled === true && (
          <Link className="sidebar-item" to="/scripts">
            {this.props.thisPage === "scripts" ? (
              <>
                <div className="icon-background icon-background-selected">
                  <img
                    className="icon"
                    src={scriptIconBlue}
                    alt="Forms Icon Blue"
                  />
                  <p className="sidebar-text-selected">Scripts</p>
                </div>
              </>
            ) : (
              <>
                <div className="icon-background">
                  <img
                    className="icon"
                    src={scriptIconGray}
                    alt="Forms Icon Blue"
                  />
                  <p className="sidebar-text">Scripts</p>
                </div>
              </>
            )}
          </Link>
        )}
        {this.props.featureFlags.isFormsEnabled === true && (
          <Link className="sidebar-item" to="/forms">
            {this.props.thisPage === "forms" ? (
              <>
                <div className="icon-background icon-background-selected">
                  <img
                    className="icon"
                    src={formIconBlue}
                    alt="Forms Icon Blue"
                  />
                  <p className="sidebar-text-selected">Forms</p>
                </div>
              </>
            ) : (
              <>
                <div className="icon-background">
                  <img
                    className="icon"
                    src={formIconGray}
                    alt="Forms Icon Blue"
                  />
                  <p className="sidebar-text">Forms</p>
                </div>
              </>
            )}
          </Link>
        )}
        {this.props.featureFlags.isAllCookiesEnabled === true && (
          <Link className="sidebar-item" to="/allCookies">
            {this.props.thisPage === "allCookies" ? (
              <>
                <div className="icon-background icon-background-selected">
                  <img
                    className="icon"
                    src={cookieIconBlue}
                    alt="Cookies Icon Blue"
                  />
                  <p className="sidebar-text-selected">Cookies</p>
                </div>
              </>
            ) : (
              <>
                <div className="icon-background">
                  <img
                    className="icon"
                    src={cookieIconGray}
                    alt="Cookies Icon Gray"
                  />
                  <p className="sidebar-text">Cookies</p>
                </div>
              </>
            )}
          </Link>
        )}
      </div>
    );
  }
}

export default Sidebar;
