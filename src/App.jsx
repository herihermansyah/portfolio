import React from "react";
import {Route, Routes} from "react-router-dom";
import Frame from "./routes/Frame";
import Main from "./routes/Main";

function App() {
  return (
    <Routes>
      <Route element={<Frame />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
