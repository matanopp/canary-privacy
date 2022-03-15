import './App.css';
import { Link } from "react-router-dom";
import logoOnlyBlue from './images/logo/logo-only-blue.png';
import changeDetectionIcon from './images/change-detection.png';
import cookiesIcon from './images/cookie.png';
import emailsIcon from './images/email.png';
import homeIcon from './images/home.png';
import changeDetectionIconBlue from './images/change-detection-blue.png';
import cookiesIconBlue from './images/cookie-blue.png';
import emailsIconBlue from './images/email-blue.png';
import homeIconBlue from './images/home-blue.png';
import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'selectedPage': props.thisPage
        };
    }

    render() {
        return (
            <div className="sidebar">
                <img className="logoOnly" src={logoOnlyBlue} alt="Logo Only Blue" />
                <Link className="icon-background" to="/">
                    {this.state.selectedPage === 'home' ?
                        <>
                            <img className="icon" src={homeIconBlue} alt="Home Icon Blue" />
                            <p className="sidebar-text-selected">Dashboard</p>
                        </>
                        :
                        <>
                            <img className="icon" src={homeIcon} alt="Home Icon" />
                            <p className="sidebar-text">Dashboard</p>
                        </>
                    }
                </Link>
                <Link className="icon-background" to="/cookies">
                    {this.state.selectedPage === 'cookies' ?
                        <>
                            <img className="icon" src={cookiesIconBlue} alt="Cookies Icon Blue" />
                            <p className="sidebar-text-selected">Cookie Compliance</p>
                        </>
                        :
                        <>
                            <img className="icon" src={cookiesIcon} alt="Cookies Icon" />
                            <p className="sidebar-text">Cookie Compliance</p>
                        </>
                    }
                </Link>
                <Link className="icon-background" to="/emails">
                    {this.state.selectedPage === 'emails' ?
                        <>
                            <img className="icon" src={emailsIconBlue} alt="Emails Icon Blue" />
                            <p className="sidebar-text-selected">Email Opt Out</p>
                        </>
                        :
                        <>
                            <img className="icon" src={emailsIcon} alt="Emails Icon" />
                            <p className="sidebar-text">Email Opt Out</p>
                        </>
                    }
                </Link>
                <Link className="icon-background" to="/changeDetection">
                    {this.state.selectedPage === 'changeDetection' ?
                        <>
                            <img className="icon" src={changeDetectionIconBlue} alt="Change Detection Icon Blue" />
                            <p className="sidebar-text-selected">Change Detection</p>
                        </>
                        :
                        <>
                            <img className="icon" src={changeDetectionIcon} alt="Change Detection Icon" />
                            <p className="sidebar-text">Change Detection</p>
                        </>
                    }
                </Link>
            </div>
        );
    }
}

export default Sidebar;