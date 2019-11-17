import React, { useState } from "react";
import "./App.css";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function App() {
  const [state, setState] = useState(false);

  return (
    <div className="App">
      <LeftPanel state={state} setState={setState} />
      <RightPanel setState={setState} />
    </div>
  );
}

export default App;
