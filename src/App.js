import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Feed from "./Feed";

function App() {
  return (
    <div>
      <h1>FlowChat</h1>
      <Signup />
      <Login />
      <Feed />
    </div>
  );
}

export default App;