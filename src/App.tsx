import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import Main from "./Pages/Main/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.default} element={<Main />}></Route>
      </Routes>
    </>
  );
}

export default App;
