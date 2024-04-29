import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";

const Main: React.FC = () => {
  return (
    <main className="lg:ml-64 h-screen">
      <Navbar />
      <Dashboard />
    </main>
  );
};

export default Main;
