import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import Main from "./Pages/Main/Main";
import Requests from "./Pages/Requests/Requests";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.default} element={<Main />}></Route>
        <Route path={routes.request} element={<Requests />}></Route>
      </Routes>
    </>
  );
}

export default App;
