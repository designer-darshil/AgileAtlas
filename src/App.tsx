import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.default} element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
