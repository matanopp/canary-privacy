import React from "react";
import Table from "./Table.js";
import "./Howto.css";
import { pageConstants } from './pageConstants.js';

class EmailsPage extends React.Component {
  render() {
    return (
      <>
        <h1>Email Compliance</h1>
        <p style={{ width: "133%" }}>
          Your commercial emails are tested for compliance with opt-out
          requirements from US{" "}
          <a href="https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business">
            CAN-SPAM
          </a>{" "}
          and Canada's{" "}
          <a href="https://fightspam.gc.ca/eic/site/030.nsf/eng/home">CASL</a>{" "}
          opt-out law, which ​​give recipients the right to have you stop
          emailing them.{" "}
        </p>
        <div className="how-to">
          <div className="how-to-steps-email">
            <div className="how-to-steps-top">
              <h1>1</h1>
              <hr></hr>
            </div>
            <p>
              Canary Privacy automatically finds publicly accessible email
              sign-ups on your website and opts in.
            </p>
          </div>
          <div className="how-to-steps-email">
            <div className="how-to-steps-top">
              <h1>2</h1>
              <hr></hr>
            </div>
            <p>
              After receiving one email, we opt-out from all commercial emails
            </p>
          </div>
          <div className="how-to-steps-email">
            <div className="how-to-steps-top">
              <h1>3</h1>
              <hr></hr>
            </div>
            <p>
              We monitor to see if any emails are sent outside of the opt-out
              allowance period of 10 business days.
            </p>
          </div>
        </div>
        <Table
          tableType="emails"
          data={{
            keys: pageConstants.emails.keys,
            headers: pageConstants.emails.headers,
            tooltipDescriptions: pageConstants.emails.tooltipDescriptions,
            existingRows: this.props.emails,
          }}
        />
      </>
    );
  }
}

export default EmailsPage;
