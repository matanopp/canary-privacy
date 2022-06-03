import React from "react";
import "./Overview.css";
import OverviewTile from "./OverviewTile.js";
import pageImage from "./images/page.svg";
import scriptImage from "./images/script.svg";
import formImage from "./images/form.svg";
import cookieImage from "./images/cookie.svg";

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="overview-container">
        {this.props.featureFlags.isPagesEnabled === true && (
          <OverviewTile
            data={this.props.pages}
            total={this.props.pagesTotal}
            img={pageImage}
            message={"New pages"}
            linkTo="/pages"
          />
        )}
        {this.props.featureFlags.isScriptsEnabled === true && (
          <OverviewTile
            data={this.props.scripts}
            total={this.props.scriptsTotal}
            img={scriptImage}
            message={"New scripts"}
            linkTo="/scripts"
          />
        )}
        {this.props.featureFlags.isFormsEnabled === true && (
          <OverviewTile
            data={this.props.forms}
            total={this.props.formsTotal}
            img={formImage}
            message={"New forms"}
            linkTo="/forms"
          />
        )}
        {this.props.featureFlags.isAllCookiesEnabled === true && (
          <OverviewTile
            data={this.props.cookies}
            total={this.props.cookiesTotal}
            img={cookieImage}
            message={"New cookies"}
            linkTo="/allCookies"
          />
        )}
      </div>
    );
  }
}
export default Overview;
