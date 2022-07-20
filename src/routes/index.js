import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailpage from "../pages/Detailpage";
import Homepage from "../pages/Homepage";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:media_type/:id" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
}
