import "./Table.css";
import React from "react";
import ReactTooltip from "react-tooltip";
import TableList from "./TableList.js";
import Popup from "./Popup.js";

import alertIcon from "./images/alert.svg";
import okIcon from "./images/ok.svg";
import expandIcon from "./images/expand.svg";
import informationIcon from "./images/tooltip.svg";

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPopup: {
        columnKey: null,
        rowIndex: null,
      },
    };

    this.updateSelectedPopup = this.updateSelectedPopup.bind(this);
  }

  render() {
    return (
      <div className={this.props.tableType + "-table-wrapper table-wrapper"}>
        <table>
          <thead>
            <tr>
              <th></th>
              {this.props.data &&
                this.props.data.keys &&
                this.props.data.keys.map((key) => (
                  <th
                    className={key}
                    data-tip={
                      this.props.data.tooltipDescriptions &&
                      this.props.data.tooltipDescriptions[key]
                    }
                  >
                    {this.props.data.headers && this.props.data.headers[key]}
                    {this.props.data.tooltipDescriptions[key] != null && (
                      <img
                        class="tooltip-icon"
                        alt=""
                        src={informationIcon}
                      ></img>
                    )}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {this.props.data &&
              this.props.data.newRows &&
              this.props.data.newRows.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {this.props.data.keys &&
                    this.props.data.keys.map((key) =>
                      this.formatTableData(
                        row,
                        key,
                        index,
                        this.props.data.newOrExistingColumn
                      )
                    )}
                </tr>
              ))}
            {this.props.data &&
              this.props.data.existingRows &&
              this.props.data.existingRows.map((row, index) => (
                <tr key={index}>
                  <td>
                    {(this.props.data.newRows
                      ? this.props.data.newRows.length
                      : 0) +
                      index +
                      1}
                  </td>
                  {this.props.data.keys &&
                    this.props.data.keys.map((key) =>
                      this.formatTableData(row, key, index)
                    )}
                </tr>
              ))}
          </tbody>
        </table>
        <ReactTooltip
          multiline={true}
          event="click"
          type="dark"
          effect="solid"
          className="tooltip-class"
        />
      </div>
    );
  }

  formatTableData(row, key, rowIndex, newOrExistingColumn = null) {
    let newLabel = <b className="new-label">NEW </b>;
    return (
      <td className={key}>
        {typeof row[key] === "string" && key !== "url" && (
          <p
            className={row[key].toLowerCase().replaceAll(" ", "-")}
            tabIndex="0"
          >
            {key === newOrExistingColumn ? newLabel : null}
            {row[key]}
          </p>
        )}
        {typeof row[key] === "string" && key === "url" && (
          <a
            className={row[key].toLowerCase().replaceAll(" ", "-")}
            href={row[key]}
            target="_blank"
            rel="noreferrer"
          >
            {key === newOrExistingColumn ? newLabel : null}
            {row[key]}
          </a>
        )}
        {typeof row[key] === "number" && (
          <p className={"number-" + row[key]}>
            {key === newOrExistingColumn ? newLabel : null}
            {row[key]}
          </p>
        )}
        {typeof row[key] === "boolean" && (
          <div className={row[key].toString()}>
            {row[key] ? (
              <img className="icon" src={alertIcon} alt="alert" />
            ) : (
              <img className="icon" src={okIcon} alt="compliant" />
            )}
          </div>
        )}
        {row[key] instanceof Array &&
          (key === this.state.selectedPopup.columnKey &&
          rowIndex === this.state.selectedPopup.rowIndex ? (
            <Popup
              closePopup={() => this.updateSelectedPopup(null, null)}
              title={
                row[key].length > 1 ? row[key].length + " Pages" : "1 Page"
              }
              pageContent={<TableList items={row[key]} />}
            />
          ) : (
            <div>
              <button
                className="array-button"
                onClick={() => {
                  this.updateSelectedPopup(key, rowIndex);
                  document.body.style.overflow = "hidden";
                }}
              >
                <img className="icon" src={expandIcon} />
                {row[key].length > 1 && <>{row[key].length} Pages</>}
                {row[key].length === 1 && <>1 Page</>}
              </button>
            </div>
          ))}
      </td>
    );
  }

  updateSelectedPopup(columnKey, rowIndex) {
    this.setState({
      selectedPopup: {
        columnKey: columnKey,
        rowIndex: rowIndex,
      },
    });

    document.body.style.overflow = "unset";
  }
}

export default Table;
