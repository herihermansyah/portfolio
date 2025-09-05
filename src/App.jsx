import { Route, Routes } from "react-router-dom";
import Frame from "./routes/Frame";
import RouteMain from "./routes/RouteMain";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Frame />}>
        <Route index element={<RouteMain/>} />
      </Route>
    </Routes>
  );
}

export default App;
