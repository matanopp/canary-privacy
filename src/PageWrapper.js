import React from "react";
import Sidebar from './Sidebar.js';
import Header from "./Header.js";
import ToDoList from "./ToDoList.js";
import './App.css';

function PageWrapper(props) {
    return (
        <>
            <Header
                domains={props.domains}
                selectedDomain={props.selectedDomain}
                updateSelectedDomain={props.updateSelectedDomain}
                signOut = {props.signOut}
            />
            <Sidebar thisPage={props.thisPage} />
            <div className="page-wrapper">
                <div className="page-content">
                    {props.page}
                </div>
                <ToDoList actionItems={props.domains[props.selectedDomain].actionItems} />
            </div>
        </>
    );
}

export default PageWrapper;