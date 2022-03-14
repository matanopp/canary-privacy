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
                <Link className="iconBackground" to="/">
                    {this.state.selectedPage === 'home' ?
                        <img className="icon" src={homeIconBlue} alt="Home Icon Blue" />
                        :
                        <img className="icon" src={homeIcon} alt="Home Icon" />
                    }
                </Link>
                <Link className="iconBackground" to="/cookies">
                    {this.state.selectedPage === 'cookies' ?
                        <img className="icon" src={cookiesIconBlue} alt="Cookies Icon Blue" />
                        :
                        <img className="icon" src={cookiesIcon} alt="Cookies Icon" />
                    }
                </Link>
                <Link className="iconBackground" to="/emails">
                    {this.state.selectedPage === 'emails' ?
                        <img className="icon" src={emailsIconBlue} alt="Emails Icon Blue" />
                        :
                        <img className="icon" src={emailsIcon} alt="Emails Icon" />
                    }
                </Link>
                <Link className="iconBackground" to="/changeDetection">
                    {this.state.selectedPage === 'changeDetection' ?
                        <img className="icon" src={changeDetectionIconBlue} alt="Change Detection Icon Blue" />
                        :
                        <img className="icon" src={changeDetectionIcon} alt="Change Detection Icon" />
                    }
                </Link>
            </div>
        );
    }
}

export default Sidebar;