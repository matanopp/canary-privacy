import React from "react";
import Sidebar from './Sidebar.js';
import Header from "./Header.js";
import './App.css';

function PageWrapper(props) {
    return (
        <>
            <Sidebar thisPage={props.thisPage} />
            <div className="page-wrapper">
                <Header domains={['domain1', 'domain2', 'domain3']} />
                <div className="page-content">
                    {props.page}
                </div>
            </div>
        </>
    );
}

export default PageWrapper;