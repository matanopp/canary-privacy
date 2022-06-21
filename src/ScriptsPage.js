import React from "react";
import Table from "./Table.js";
import "./ChangeDetection.css";
import _ from "lodash";

let keys = ["scriptName", "baseDomain", "scriptUrl", "urls", "dateDetected"];

let headers = {
  scriptName: "Script Name",
  baseDomain: "Base Domain",
  scriptUrl: "Script URL",
  urls: "Pages",
  dateDetected: "Date Detected",
};

let newOrExistingColumn = "dateDetected";

class ScriptsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Scripts</h1>
        <p style={{ width: "133%" }}>
          Scripts have the ability to make extensive changes to your website
          that can impact user privacy. A full inventory of your website’s
          scripts are automatically cataloged every scan and new scripts are
          marked. We include a list of pages where each script was found to make
          further inspection easy. <br></br>
          <b>Note</b>: Free trials include full scans of up to 50 pages. For
          greater coverage, upgrade to a Business or Enterprise account.
        </p>
        <div className="inventory-overview">
          <div className="new">
            <p className="title">New Scripts</p>
            <p className="number">{this.props.newScripts.length}</p>
          </div>
          <div className="total">
            <p className="title">Total Scripts</p>
            <p className="number">
              {this.props.newScripts.length + this.props.existingScripts.length}
            </p>
          </div>
        </div>
        {/* <p>{this.props.newScripts.length} New Scripts, {this.props.newScripts.length + this.props.existingScripts.length} Total Scripts</p> */}
        {(this.props.newScripts.length > 0 ||
          this.props.existingScripts.length > 0) && (
          <Table
            tableType="scripts"
            data={{
              keys,
              headers,
              newRows: _.orderBy(
                this.props.newScripts,
                (s) => s.urls.length,
                "desc"
              ),
              existingRows: _.orderBy(
                this.props.existingScripts,
                (s) => s.urls.length,
                "desc"
              ),
              newOrExistingColumn,
            }}
          />
        )}
      </>
    );
  }
}

export default ScriptsPage;
