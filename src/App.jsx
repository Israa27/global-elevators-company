import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import CreateElevator from "./Pages/CreateElevator";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create_your_elevator" element={<CreateElevator/>} />
      </Routes>
    </Layout>
  );
}

export default App;
