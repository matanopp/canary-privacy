import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="footer">
                    <a href="https://www.canaryprivacy.com/" target="_blank" rel="noopener noreferrer">
                        Canary Privacy
                    </a>
                    <a href="https://www.canaryprivacy.com/privacy-policy" target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                    </a>
                </div>
            </>
        );
    }
}

export default Footer;