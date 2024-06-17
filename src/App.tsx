import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import Main from "./Pages/Main/Main";
import Requests from "./Pages/Requests/Requests";
import Subscriptions from "./Pages/Subscriptions/Subscriptions";
import Balance from "./Pages/Balance/Balance";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.default} element={<Main />}></Route>
        <Route path={routes.request} element={<Requests />}></Route>
        <Route path={routes.balance} element={<Balance />}></Route>
        <Route path={routes.subscription} element={<Subscriptions />}></Route>
      </Routes>
    </>
  );
}

export default App;
