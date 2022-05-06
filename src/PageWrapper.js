import React from "react";
import Sidebar from "./Sidebar.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import RescanPopup from "./RescanPopup.js";
import "./App.css";

class PageWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rescanPopupIsVisible: false,
    };
    this.showRescanPopup = this.showRescanPopup.bind(this);
    this.hideRescanPopup = this.hideRescanPopup.bind(this);
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
            hideRescanPopup={this.hideRescanPopup}
            rescanPopupIsVisible={this.state.rescanPopupIsVisible}
            signOut={this.props.signOut}
            username={this.props.username}
          />
          {this.state.rescanPopupIsVisible && (
            <RescanPopup
              hideRescanPopup={this.hideRescanPopup}
              rescanDomain={
                this.props.domains[this.props.selectedDomain].domainName
              }
            />
          )}
          <Sidebar thisPage={this.props.thisPage} />
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

  hideRescanPopup() {
    this.setState({ rescanPopupIsVisible: false });
    document.body.style.overflow = "unset";
  }
}

export default PageWrapper;
