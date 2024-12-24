import { Route, Routes } from "react-router-dom";
import { routes } from "@/routes/routes";
import Layout from "@/Pages/Layout/Layout";
import Dashboard from "@/Pages/Dashboard/Dashboard";
import { ThemeProvider } from "@/Components/ThemeProvider";
import Projects from "@/Pages/Projects/Projects";
import Inbox from "@/Pages/Inbox/Inbox";
import Notifications from "@/Pages/Notifications/Notifications";
import Profile from "@/Pages/Profile/Profile";
import Settings from "@/Pages/Settings/Settings";
import Faqs from "@/Pages/Faqs/Faqs";

function App() {
  return (
    <>
      <ThemeProvider storageKey="vite-ui-theme">
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.default} element={<Dashboard />}></Route>
            <Route path={routes.projects} element={<Projects />}></Route>
            <Route path={routes.inbox} element={<Inbox />}></Route>
            <Route
              path={routes.notifications}
              element={<Notifications />}
            ></Route>
            <Route path={routes.profile} element={<Profile />}></Route>
            <Route path={routes.settings} element={<Settings />}></Route>
            <Route path={routes.faqs} element={<Faqs />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
