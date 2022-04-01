import React from 'react';
import expandIcon from './images/expand.svg';

class TableListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showItems: false,
        };
    }

    render() {
        return (
            <>
                {!this.state.showItems &&
                    <div>
                        <button className="array-button" onClick={() => this.setState({ showItems: true })}>
                            <img className="icon" src={expandIcon} />
                        </button>
                        {this.props.items.length} Pages
                    </div>
                }
                {this.state.showItems &&
                    <>
                        <button className="array-button" onClick={() => this.setState({ showItems: false })}>
                            Close
                        </button>
                        <br />
                        {this.props.items.map(s => <p>{s}</p>)}
                    </>
                }
            </>
        );
    }
}

export default TableListItem;