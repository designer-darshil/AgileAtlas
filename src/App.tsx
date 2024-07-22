import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import Requests from "./Pages/Requests/Requests";
import Layout from "./Pages/Layout/Layout";
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
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
