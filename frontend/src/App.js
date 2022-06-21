import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import "./App.scss";
import Home from "./Components/Home";
import MyHabits from "./Components/Habits";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/myhabits" element={<MyHabits />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
