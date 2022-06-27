import React, { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    console.log("logout");
    logout();
  };

  return (
    <>
      <h1 className="text-gray-100">Olá</h1>
      <button className="text-blue-600" onClick={handleLogout}>
        Sair
      </button>
    </>
  );
};

export default Home;
