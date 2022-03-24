import React from "react";
import Overview from "./Overview.js";
import CookieTile from "./CookieTile.js";
import EmailTile from "./EmailTile.js";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Analytics Overview</h1>
                <Overview
                    pages={this.props.data.newPages.length}
                    pagesTotal={this.props.data.newPages.length + this.props.data.existingPages.length}
                    scripts={this.props.data.newScripts.length}
                    scriptsTotal={this.props.data.newScripts.length + this.props.data.existingScripts.length}
                    forms={this.props.data.newForms.length}
                    formsTotal={this.props.data.newForms.length + this.props.data.existingForms.length}
                />
                <h1>Compliance Tracking</h1>
                <CookieTile
                    highPriority={this.props.data.highPriorityCookiesCount}
                    mediumPriority={this.props.data.mediumPriorityCookiesCount}
                    lowPriority={this.props.data.lowPriorityCookiesCount}
                />
                <EmailTile
                    afterGracePeriod={this.props.data.emailsAfterGracePeriod.length}
                    withinGracePeriod={0}
                />
            </>

        );
    }
}

export default Dashboard;