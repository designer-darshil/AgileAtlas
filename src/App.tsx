import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import Requests from "./Pages/Requests/Requests";
import Subscriptions from "./Pages/Subscriptions/Subscriptions";
import Balance from "./Pages/Balance/Balance";
import Layout from "./Pages/Layout/Layout";
import AddSubscriptions from "./Pages/Subscriptions/AddSubscriptions";
import Transaction from "./Pages/Transaction/Transaction";
import Employees from "./Pages/Employees/Employees";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { ThemeProvider } from "./Components/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.default} element={<Dashboard />}></Route>
            <Route path={routes.request} element={<Requests />}></Route>
            <Route path={routes.balance} element={<Balance />}></Route>
            <Route
              path={routes.subscription}
              element={<Subscriptions />}
            ></Route>
            <Route
              path={routes.addsubscription}
              element={<AddSubscriptions />}
            ></Route>
            <Route path={routes.employees} element={<Employees />}></Route>
            <Route path={routes.transaction} element={<Transaction />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
