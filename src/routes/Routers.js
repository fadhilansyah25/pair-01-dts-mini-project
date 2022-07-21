import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Detailpage from "../pages/Detailpage";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../app/firebase";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/details/:media_type/:id"
          element={
            <PrivateRoute>
              <Detailpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectLoginRegister>
              <LoginPage />
            </ProtectLoginRegister>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <ProtectLoginRegister>
              <RegisterPage />
            </ProtectLoginRegister>
          }
        ></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  return loading ? null : user ? children : <Navigate to="/login" />;
}

function ProtectLoginRegister({ children }) {
  const [user, loading] = useAuthState(auth);
  return loading ? null : !user ? children : <Navigate to="/" />;
}
