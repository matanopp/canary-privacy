import React from 'react';
import caretDown from './images/caret-down.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="header">
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
                </div>
            </>
        );
    }
}

export default Header;