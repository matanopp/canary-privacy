import React from "react";
import Table from "./Table.js";
import "./App.css";
import "./Howto.css";
import { IconTexture } from "@aws-amplify/ui-react";

let keys = [
  "risk",
  "name",
  "status",
  "classificationExpected",
  "classificationActual",
  "beforeOptIn",
  "domain",
];

let headers = {
  risk: "Risk",
  name: "Name",
  status: "Status",
  classificationExpected: "Expected Classification",
  classificationActual: "Actual Classification",
  beforeOptIn: "Served Before Opt-In",
  domain: "Domain",
};

class CookiesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Cookie Compliance</h1>
        <p style={{ width: "133%" }}>
          Your website’s cookies are tested for compliance with privacy laws
          such as the CCPA and GDPR. Cookies, particularly those created by
          third parties, may be used to create detailed profiles of your
          visitors.
        </p>
        <div className="how-to">
          <div className="how-to-steps-cookies">
            <div className="how-to-steps-top">
              <h1>1</h1>
              <hr></hr>
            </div>
            <p>
              Canary Privacy simulates a user interacting with your website.
            </p>
          </div>
          <div className="how-to-steps-cookies">
            <div className="how-to-steps-top">
              <h1>2</h1>
              <hr></hr>
            </div>
            <p>
              On page load, we check to see if any disallowed cookies are set
              before a user accepts their use. In the EU, only “strictly
              necessary” cookies are allowed before a user consents.{" "}
            </p>
          </div>
          <div className="how-to-steps-cookies">
            <div className="how-to-steps-top">
              <h1>3</h1>
              <hr></hr>
            </div>
            <p>
              Using your website cookie controls, we simulate opt-in and opt-out
              of all cookie categories to see if user preferences are honored.{" "}
            </p>
          </div>
          <div className="how-to-steps-cookies">
            <div className="how-to-steps-top">
              <h1>4</h1>
              <hr></hr>
            </div>
            <p>
              We log unexpected behavior and non-compliance and actionable
              advice is displayed for remediation.{" "}
            </p>
          </div>
        </div>
        <Table
          tableType="cookies"
          data={{
            keys,
            headers,
            existingRows: this.props.cookies,
          }}
        />
      </>
    );
  }
}

export default CookiesPage;
