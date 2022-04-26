import React from 'react';
import RescanPopup from './RescanPopup.js';
import caretDown from './images/caret-down.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signOut : props.signOut,
            username : props.username,
            rescanPopupIsVisible: false,
        };
        this.showRescanPopup = this.showRescanPopup.bind(this);
        this.hideRescanPopup = this.hideRescanPopup.bind(this);
    }

    render() {
        return (
            <>
                <div className="header">
                    <div className="header-left">
                        <div className="domain-dropdown">
                            <div className="domain-dropdown-button">
                                <h1>{this.props.domains[this.props.selectedDomain].domainName}</h1>
                                <img className="dropdown-caret" src={caretDown} />
                            </div>
                            <div className={"domain-dropdown-content"}>
                                {this.props.domains && this.props.domains.map((domain, index) => (
                                    <button className="domain-link" onClick={() => {
                                        this.props.updateSelectedDomain(index);
                                    }}>{domain.domainName}</button>
                                ))}
                            </div>
                        </div>
                        <button onClick={this.showRescanPopup}>Request Rescan</button>
                        {this.state.rescanPopupIsVisible &&
                            <RescanPopup
                                hideRescanPopup={this.hideRescanPopup}
                                rescanDomain={this.props.domains[this.props.selectedDomain].domainName}
                            />
                        }
                    </div>
                    <div className='header-auth'>
                        <div className='header-auth-username'>{this.state.username}</div>
                        <div className='logout'>
                            <button onClick={this.state.signOut}>Log out</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    showRescanPopup() {
        this.setState({ rescanPopupIsVisible: true });
        document.body.style.overflow = 'hidden';
    }

    hideRescanPopup() {
        this.setState({ rescanPopupIsVisible: false });
        document.body.style.overflow = 'unset';
    }
}

export default Header;