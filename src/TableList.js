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
                            {this.props.items.length} Pages
                        </button>
                    </div>
                }
                {this.state.showItems &&
                    <>
                        <button className="array-items" onClick={() => this.setState({ showItems: false })}>
                            <p><b>{this.props.items.length} Pages (click anywhere on list to close)</b></p>
                            <br />
                            {this.props.items.map(s => <><p>{s}</p><br /></>)}
                            <p><b>{this.props.items.length} Pages (click anywhere on list to close)</b></p>
                        </button>
                    </>
                }
            </>
        );
    }
}

export default TableListItem;