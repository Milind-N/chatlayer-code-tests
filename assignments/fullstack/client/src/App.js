import React from "react";
import { constants } from './constants'

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>{constants.APP_TITLE}</h1>
      </div>
    </div>
  );
}

export default App;
