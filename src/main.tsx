import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.tsx";
import Sidebar from "./Components/Sidebar/Sidebar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navbar />
    <Sidebar />
    <App />
  </BrowserRouter>
);
