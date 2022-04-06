import React from 'react';
import { render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import awsExports from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import './index.css';

const rootElement = document.getElementById("root");
render(
    <Authenticator>
        {({ signOut, user }) => (
            <App user={user} signOut={signOut} />
        )}
    </Authenticator>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
