import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailpage from "../pages/Detailpage";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:media_type/:id" element={<Detailpage />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
