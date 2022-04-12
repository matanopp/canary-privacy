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
                            {this.props.items.length > 1 && <>{this.props.items.length} Pages</>}
                            {this.props.items.length === 1 && <> 1 Page</>}
                        </button>
                    </div>
                }
                {this.state.showItems &&
                    <>
                        <button className="array-items" onClick={() => this.setState({ showItems: false })}>
                            {this.props.items.length > 1 && <p><b>{this.props.items.length} Pages (click anywhere on list to close)</b></p>}
                            <br />
                            {this.props.items.map(s => <><a href={s} target="_blank" rel='noreferrer'>{s}</a><br/><br/></>)}
                            {this.props.items.length > 1 &&<p><b>{this.props.items.length} Pages (click anywhere on list to close)</b></p>}
                        </button>
                    </>
                }
            </>
        );
    }
}

export default TableListItem;