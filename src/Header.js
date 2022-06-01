import React from "react";
import caretDown from "./images/caret-down.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signOut: props.signOut,
      username: props.username,
    };
  }

  render() {
    return (
      <>
        <div className="header">
          <div className="header-left">
            <div className="domain-dropdown">
              <div className="domain-dropdown-button">
                <h1>
                  {this.props.domains[this.props.selectedDomain].domainName}
                </h1>
                <img className="dropdown-caret" src={caretDown} />
              </div>
              <div className={"domain-dropdown-content"}>
                {this.props.domains &&
                  this.props.domains.map((domain, index) => (
                    <button
                      className="domain-link"
                      onClick={() => {
                        this.props.updateSelectedDomain(index);
                      }}
                    >
                      {domain.domainName}
                    </button>
                  ))}
              </div>
            </div>
            <button onClick={this.props.showRescanPopup}>Rescan</button>
          </div>
          <div className="header-auth">
            <div id="header-auth-username">{this.state.username}</div>
            <div className="logout">
              <button onClick={this.state.signOut}>Log out</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
