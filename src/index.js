import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {HashRouter, Route, Routes} from "react-router-dom";
import Stay from "./routes/stays";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:stayId" element={<Stay />} />
    </Routes>
  </HashRouter>
);
