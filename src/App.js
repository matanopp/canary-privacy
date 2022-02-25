import './App.css';
import { Amplify } from 'aws-amplify';
import logoOnlyBlue from './logo/logo-only-blue.png';
import OverviewTile from './OverviewTile.js'
import CookieTile from './CookieTile.js';
import EmailTile from './EmailTile.js';
import ChangeDetectionTile from './ChangeDetectionTile';
import Dashboards from "./Dashboards";

import awsExports from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsExports);

function App({ signOut, user }) {
    return (
        <div id="home-wrapper">
            <div id="home-sidebar">
                <a href="/">
                    <img class="logoOnly" src={logoOnlyBlue} alt="Logo Only Blue" />
                </a>
            </div>
            <div id="home">
                <div className="header">
                    <h1>Company Name</h1>
                </div>
                <OverviewTile cookies={5} emails={2} changes={30} />
                <div className="tests-wrapper">
                    <CookieTile
                        highPriority={3}
                        mediumPriority={20}
                        lowPriority={21}
                    />
                    <EmailTile />
                </div>
                <ChangeDetectionTile />
            </div>
        </div>
    );
}
export default withAuthenticator(App);
