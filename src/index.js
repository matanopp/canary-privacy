import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CookiesPage from './CookiesPage.js';
import EmailsPage from './EmailsPage.js';
import ChangeDetectionPage from './ChangeDetectionPage.js';
import Sidebar from './Sidebar.js';
// import Amplify from "aws-amplify";
// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="cookies" element={
                <CookiesPage
                    mismanagedCookies={3}
                    misclassifiedCookies={5}
                />
            } />
            <Route path="emails" element={
                <EmailsPage />
            } />
            <Route path="changeDetection" element={
                <ChangeDetectionPage />
            } />
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
