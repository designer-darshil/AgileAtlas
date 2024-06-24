import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import Main from "./Pages/Main/Main";
import Requests from "./Pages/Requests/Requests";
import Subscriptions from "./Pages/Subscriptions/Subscriptions";
import Balance from "./Pages/Balance/Balance";
import Layout from "./Pages/Layout/Layout";
import AddSubscriptions from "./Pages/Subscriptions/AddSubscriptions";
import Transaction from "./Pages/Transaction/Transaction";
import Employees from "./Pages/Employees/Employees";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.default} element={<Main />}></Route>
          <Route path={routes.request} element={<Requests />}></Route>
          <Route path={routes.balance} element={<Balance />}></Route>
          <Route path={routes.subscription} element={<Subscriptions />}></Route>
          <Route
            path={routes.addsubscription}
            element={<AddSubscriptions />}
          ></Route>
          <Route path={routes.employees} element={<Employees />}></Route>
          <Route path={routes.transaction} element={<Transaction />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
