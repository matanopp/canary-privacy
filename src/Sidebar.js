import './App.css';
import { Link } from "react-router-dom";
import logoTextBlue from './images/logo/logo-text-blue.png';
// import changeDetectionIconBlue from './images/sidebar/change-detection-blue.svg';
// import changeDetectionIconGray from './images/sidebar/change-detection-gray.svg';
import cookieIconBlue from './images/sidebar/blue/cookie-blue.svg';
import cookieIconGray from './images/sidebar/gray/cookie.svg';
import emailIconBlue from './images/sidebar/blue/email-blue.svg';
import emailIconGray from './images/sidebar/gray/email.svg';
import dashboardIconBlue from './images/sidebar/blue/dashboard-blue.svg';
import dashboardIconGray from './images/sidebar/gray/dashboard.svg';
import pageIconBlue from './images/sidebar/blue/page-blue.svg';
import pageIconGray from './images/sidebar/gray/page.svg';
import formIconBlue from './images/sidebar/blue/form-blue.svg';
import formIconGray from './images/sidebar/gray/form.svg';
import scriptIconBlue from './images/sidebar/blue/script-blue.svg';
import scriptIconGray from './images/sidebar/gray/script.svg';
import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar">
                <img className="logo" src={logoTextBlue} alt="Logo Text Blue" />
                <Link className="icon-background" to="/">
                    {this.props.thisPage === 'dashboard' ?
                        <>
                            <img className="icon" src={dashboardIconBlue} alt="Dashboard Icon Blue" />
                            <p className="sidebar-text-selected">Dashboard</p>
                        </>
                        :
                        <>
                            <img className="icon" src={dashboardIconGray} alt="Dashboard Icon Gray" />
                            <p className="sidebar-text">Dashboard</p>
                        </>
                    }
                </Link>
                <div style={{ height: '2px', width: '90%', backgroundColor: 'lightgray' }} />
                <h1>COMPLIANCE TESTING</h1>
                <Link className="icon-background" to="/cookies">
                    {this.props.thisPage === 'cookies' ?
                        <>
                            <img className="icon" src={cookieIconBlue} alt="Cookie Icon Blue" />
                            <p className="sidebar-text-selected">Cookie Compliance</p>
                        </>
                        :
                        <>
                            <img className="icon" src={cookieIconGray} alt="Cookie Icon Gray" />
                            <p className="sidebar-text">Cookie Compliance</p>
                        </>
                    }
                </Link>
                <Link className="icon-background" to="/emails">
                    {this.props.thisPage === 'emails' ?
                        <>
                            <img className="icon" src={emailIconBlue} alt="Email Icon Blue" />
                            <p className="sidebar-text-selected">Email Compliance</p>
                        </>
                        :
                        <>
                            <img className="icon" src={emailIconGray} alt="Email Icon Gray" />
                            <p className="sidebar-text">Email Compliance</p>
                        </>
                    }
                </Link>
                <div style={{ height: '2px', width: '90%', backgroundColor: 'lightgray' }} />
                <h1>CHANGE DETECTION</h1>
                <Link className="icon-background" to="/pages">
                    {this.props.thisPage === 'pages' ?
                        <>
                            <img className="icon" src={pageIconBlue} alt="Page Icon Blue" />
                            <p className="sidebar-text-selected">Pages</p>
                        </>
                        :
                        <>
                            <img className="icon" src={pageIconGray} alt="Page Icon Blue" />
                            <p className="sidebar-text">Pages</p>
                        </>
                    }
                </Link>
                <Link className="icon-background" to="/scripts">
                    {this.props.thisPage === 'scripts' ?
                        <>
                            <img className="icon" src={scriptIconBlue} alt="Forms Icon Blue" />
                            <p className="sidebar-text-selected">Scripts</p>
                        </>
                        :
                        <>
                            <img className="icon" src={scriptIconGray} alt="Forms Icon Blue" />
                            <p className="sidebar-text">Scripts</p>
                        </>
                    }
                </Link>
                <Link className="icon-background" to="/forms">
                    {this.props.thisPage === 'forms' ?
                        <>
                            <img className="icon" src={formIconBlue} alt="Forms Icon Blue" />
                            <p className="sidebar-text-selected">Forms</p>
                        </>
                        :
                        <>
                            <img className="icon" src={formIconGray} alt="Forms Icon Blue" />
                            <p className="sidebar-text">Forms</p>
                        </>
                    }
                </Link>
            </div>
        );
    }
}

export default Sidebar;