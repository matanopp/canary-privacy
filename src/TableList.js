import React from 'react';

let numItemsPerPage = 5;

class TableListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showItems: false,
            itemsPage: 0,
        };
    }

    render() {
        return (
            <>
                {!this.state.showItems &&
                    <button onClick={() => this.setState({ showItems: true })}>
                        {this.props.items.length} Pages
                    </button>
                }
                {this.state.showItems && <div>
                    <button onClick={() => this.setState({ showItems: false })}>
                        Close
                    </button>
                    <br />
                    {this.props.items.slice(numItemsPerPage * this.state.itemsPage, numItemsPerPage * (this.state.itemsPage + 1)).map(s => <p>{s}</p>)}
                    <br />
                    <button onClick={() => this.setState(prevState => ({ itemsPage: prevState.itemsPage - 1 }))}>
                        Previous
                    </button>
                    <button onClick={() => this.setState(prevState => ({ itemsPage: prevState.itemsPage + 1 }))}>
                        Next
                    </button>
                </div>}
            </>
        );
    }
}

export default TableListItem;