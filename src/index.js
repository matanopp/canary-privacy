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
import PageWrapper from './PageWrapper.js';
import CookiesPage from './CookiesPage.js';
import EmailsPage from './EmailsPage.js';
import PagesPage from './PagesPage.js';
import awsExports from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <Authenticator>
                    {({ signOut, user }) => (
                        <PageWrapper thisPage="home" page={
                            <App user={user} />
                        } />
                    )}
                </Authenticator>
            } />
            <Route path="cookies" element={
                <PageWrapper thisPage="cookies" page={
                    <CookiesPage
                        mismanagedCookies={3}
                        misclassifiedCookies={5}
                    />
                } />
            } />
            <Route path="emails" element={
                <PageWrapper thisPage="emails" page={
                    <EmailsPage />
                } />
            } />
            <Route path="pages" element={
                <PageWrapper thisPage="pages" page={
                    <PagesPage />
                } />
            } />
            <Route path="forms" element={
                <PageWrapper thisPage="forms" page={
                    <PagesPage selectedPage="forms" />
                } />
            } />
            <Route path="scripts" element={
                <PageWrapper thisPage="scripts" page={
                    <PagesPage selectedPage="scripts" />
                } />
            } />
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
