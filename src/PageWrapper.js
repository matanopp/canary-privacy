import React from "react";
import Sidebar from "./Sidebar.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Popup from "./Popup.js";
import RescanRequestContent from "./RescanRequestContent.js";
import "./App.css";

class PageWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rescanPopupIsVisible: false,
        };
        this.showRescanPopup = this.showRescanPopup.bind(this);
        this.closeRescanPopup = this.closeRescanPopup.bind(this);
    }

    render() {
        return (
            <>
                <div className="page-wrapper">
                    <Header
                        domains={this.props.domains}
                        selectedDomain={this.props.selectedDomain}
                        updateSelectedDomain={this.props.updateSelectedDomain}
                        showRescanPopup={this.showRescanPopup}
                        closePopup={this.closePopup}
                        rescanPopupIsVisible={this.state.rescanPopupIsVisible}
                        signOut={this.props.signOut}
                        username={this.props.username}
                    />
                    {this.state.rescanPopupIsVisible &&
                        <Popup
                            closePopup={this.closeRescanPopup}
                            title="Rescan"
                            pageContent={
                                <RescanRequestContent
                                    rescanDomain={this.props.domains[this.props.selectedDomain].domainName}
                                />
                            }
                        />
                    }
                    <Sidebar thisPage={this.props.thisPage} featureFlags={this.props.featureFlags}/>
                    <div className="page-content">{this.props.page}</div>
                    <Footer />
                </div>
            </>
        );
    }

    showRescanPopup() {
        this.setState({ rescanPopupIsVisible: true });
        document.body.style.overflow = "hidden";
    }

    closeRescanPopup() {
        this.setState({ rescanPopupIsVisible: false });
        document.body.style.overflow = "unset";
    }
}

export default PageWrapper;
