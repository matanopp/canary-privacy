import React from "react";
import { API } from "aws-amplify";
import "./App.css";

class Dashboards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboard: {},
      userId: props.userd,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}></button>
        {this.state.dashboard["id"]}
        {this.state.props.userId}
      </div>
    );
  }

  async handleSubmit(event) {
    event.preventDefault();
    let dashboards = await this.getDashboards();
    console.log(dashboards);
  }

  async getDashboards(userId) {
    const apiName = "dashboard";
    const path = "/dashboards";
    const config = {
      headers: {},
      response: true,
      queryStringParameters: {
        userId: userId,
      },
    };
    try {
      const response = await API.get(apiName, path, config);
      let dashboards = response.data;
      let userDashboards = dashboards.filter((d) => d.userId === userId);
      let userDashboard = userDashboards[0];
      this.setState({ dashboard: userDashboard });
      console.log(userDashboards[0]);
    } catch (err) {
      console.log(err);
      throw err.response.data;
    }
  }
}

export default Dashboards;
