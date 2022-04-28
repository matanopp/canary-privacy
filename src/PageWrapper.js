import React from "react";
import Sidebar from './Sidebar.js';
import Header from './Header.js';
import Footer from './Footer.js';
import ToDoList from "./ToDoList.js";
import './App.css';

function PageWrapper(props) {
    return (
        <>
            <div className="page-wrapper">
                <Header
                    domains={props.domains}
                    selectedDomain={props.selectedDomain}
                    updateSelectedDomain={props.updateSelectedDomain}
                    signOut={props.signOut}
                />
                <Sidebar thisPage={props.thisPage} />
                <div className="page-content">
                    {props.page}
                </div>
                {/* <ToDoList /> */}
                <Footer />
            </div>
            {/* <ToDoList actionItems={props.data.actionItems} /> */}
        </>
    );
}

export default PageWrapper;