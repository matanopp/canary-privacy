import React from 'react';
import './ToDoList.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="to-do-list">
                To Do List:
            </div>
        );
    }
}

export default ToDoList;