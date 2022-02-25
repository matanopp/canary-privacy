import "./App.css";
import Amplify from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import Dashboards from "./Dashboards"

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <Dashboards userId = {user.username}></Dashboards>
    </>
  );
}
export default withAuthenticator(App);
