import React from "react";
import Sidebar from './Sidebar.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';

function PageWrapper(props) {
    return (
        <>
            <Header
                domains={props.domains}
                selectedDomain={props.selectedDomain}
                updateSelectedDomain={props.updateSelectedDomain}
                signOut={props.signOut}
            />
            <Sidebar thisPage={props.thisPage} />
            <div className="page-wrapper">
                <div className="page-content">
                    {props.page}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PageWrapper;