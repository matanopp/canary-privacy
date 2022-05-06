import React from "react";
import "./ToDoList.css";

import cookieIcon from "./images/sidebar/blue/cookie-blue.svg";
import emailIcon from "./images/sidebar/blue/email-blue.svg";
import pageIcon from "./images/sidebar/blue/page-blue.svg";
import scriptIcon from "./images/sidebar/blue/script-blue.svg";
import formIcon from "./images/sidebar/blue/form-blue.svg";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="to-do-list">
        <h1>To Do List</h1>
        {this.props.actionItems
          .sort(this.compareItems)
          .map((item) => this.makeToDoItem(item))}
      </div>
    );
  }

  compareItems(a, b) {
    if (a.priority.toLowerCase() === b.priority.toLowerCase()) return 0;
    if (
      a.priority.toLowerCase() === "high" ||
      b.priority.toLowerCase() === "low"
    )
      return -1;
    if (
      a.priority.toLowerCase() === "low" ||
      b.priority.toLowerCase() === "high"
    )
      return 1;
    return 0;
  }

  makeToDoItem(itemData) {
    return (
      <div className="to-do-item">
        <div>
          <img src={this._getImageSource(itemData.type)} />
          <b
            className={"to-do-" + itemData.priority.toLowerCase() + "-priority"}
          >
            {itemData.priority.toUpperCase()}
          </b>
        </div>
        <p>
          <b>{itemData.title}</b>
        </p>
        <p className="to-do-desc" tabIndex="0">
          {itemData.description}
        </p>
      </div>
    );
  }

  _getImageSource(type) {
    switch (type) {
      case "cookie":
        return cookieIcon;
      case "email":
        return emailIcon;
      case "page":
        return pageIcon;
      case "script":
        return scriptIcon;
      case "form":
        return formIcon;
      default:
        return null;
    }
  }
}

export default ToDoList;
