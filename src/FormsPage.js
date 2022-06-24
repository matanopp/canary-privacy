import React from "react";
import Table from "./Table.js";
import "./ChangeDetection.css";
import _ from "lodash";
import { pageConstants } from './pageConstants.js';

let keys = pageConstants.forms.keys;

let headers = pageConstants.forms.headers;

let newOrExistingColumn = "dateDetected";

class FormsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Forms</h1>
        <p style={{ width: "133%" }}>
          A full inventory of your website’s forms are automatically cataloged
          every scan and new forms are marked. We include a list of pages where
          each form was found to make further inspection easy. You may consider
          reviewing new forms for the presence of notice (privacy policy) and
          consent mechanisms if you plan to use contact information for outward
          communication.
        </p>
        <div className="inventory-overview">
          <div className="new">
            <p className="title">New Forms</p>
            <p className="number">{this.props.newForms.length}</p>
          </div>
          <div className="total">
            <p className="title">Total Forms</p>
            <p className="number">
              {this.props.newForms.length + this.props.existingForms.length}
            </p>
          </div>
        </div>
        {/* <p>
          {this.props.newForms.length} New Forms,{" "}
          {this.props.newForms.length + this.props.existingForms.length} Total
          Forms
        </p> */}
        {(this.props.newForms.length > 0 ||
          this.props.existingForms.length > 0) && (
          <Table
            tableType="forms"
            data={{
              keys,
              headers,
              tooltipDescriptions: pageConstants.forms.tooltipDescriptions,
              newRows: _.orderBy(
                this.props.newForms,
                (s) => s.urls.length,
                "desc"
              ),
              existingRows: _.orderBy(
                this.props.existingForms,
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

export default FormsPage;
