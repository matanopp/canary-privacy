import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDomain: (props.domains && props.domains.length > 0) ? props.domains[0] : "",
            displayDropdown: false,
        }
    }

    render() {
        return (
            <div className="header">
                <h1 className="domain-dropdown">Domain 1</h1>
                {/* <div className="domain-dropdown">
                    <button className="domain-dropdown-button" onClick={
                        () => this.setState((oldState) => ({ displayDropdown: !oldState.displayDropdown }))
                    }>
                        {this.state.selectedDomain}
                    </button>
                    <div className={"domain-dropdown-content" + (this.state.displayDropdown ? "-show" : "")}>
                        {this.props.domains && this.props.domains.map(domain => (
                            <p className="domain-link">{domain}</p>
                        ))}
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Header;