import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { AuthContext } from "./contexts/AuthContext";
import { AuthProvider } from "./contexts/AuthProvider";
import { useContext } from "react";

const Router = () => {
  const Private = (props) => {
    const { loading, authenticated } = useContext(AuthContext);

    if (loading) {
      return (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <AiOutlineLoading3Quarters className="text-gray-100 w-10 h-10 animate-spin" />
        </div>
      );
    }

    return props.children;
  };

  return (
    <AuthProvider>
      <Routes>
        <Route
          index
          element={
            <Private>
              <Home />
            </Private>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default Router;
