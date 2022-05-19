import React from 'react';
import expandIcon from './images/expand.svg';

class TableListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.items.map(s => <><a href={s} target="_blank" rel='noreferrer'>{s}</a><br /><br /></>)}
            </div>
        );
    }
}

export default TableListItem;