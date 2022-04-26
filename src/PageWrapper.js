import React from "react";
import Sidebar from './Sidebar.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';

class PageWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header
                    domains={this.props.domains}
                    selectedDomain={this.props.selectedDomain}
                    updateSelectedDomain={this.props.updateSelectedDomain}
                    showRescanPopup={this.showRescanPopup}
                    signOut={this.props.signOut}
                    username = {this.props.username}
                />
                <Sidebar thisPage={this.props.thisPage} />
                <div className="page-wrapper">
                    <div className="page-content">
                        {this.props.page}
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default PageWrapper;