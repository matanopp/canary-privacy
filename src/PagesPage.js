import React from "react";
import Table from "./Table.js";
import "./ChangeDetection.css";
import "./Howto.css";
import _ from "lodash";
import { pageConstants } from './pageConstants.js';

let newOrExistingColumn = "dateDetected";

class PagesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Pages</h1>
        <p style={{ width: "133%" }}>
          New pages that appear under your domain are automatically cataloged
          every scan and new pages are marked. You may consider inspecting new
          pages for privacy compliance.
        </p>
        <div className="inventory-overview">
          {/* <div className="new">
            <p className="title">New Pages</p>
            <p className="number">{this.props.newPages.length}</p>
          </div> */}
          <div className="total">
            <p className="title">Total Pages</p>
            <p className="number">
              {this.props.newPages.length + this.props.existingPages.length}
            </p>
          </div>
        </div>
        {/* <p>
          {this.props.newPages.length} New Pages,{" "}
          {this.props.newPages.length + this.props.existingPages.length} Total
          Pages
        </p> */}
        {(this.props.newPages.length > 0 ||
          this.props.existingPages.length > 0) && (
          <Table
            tableType="pages"
            data={{
              keys: pageConstants.pages.keys,
              headers: pageConstants.pages.headers,
              tooltipDescriptions: pageConstants.pages.tooltipDescriptions,
              newRows: _.orderBy(this.props.newPages, (s) => s.url),
              existingRows: _.orderBy(this.props.existingPages, (s) => s.url),
              newOrExistingColumn,
            }}
          />
        )}
      </>
    );
  }
}

export default PagesPage;
