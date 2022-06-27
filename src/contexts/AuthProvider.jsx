import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const AuthProvider = (props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
      navigate("/");
    }

    setLoading(false);
  }, []);

  const login = (email, password) => {
    console.log("login", { email, password });

    if (password === "1") {
      const loggedUser = { id: "1", email };
      const session_key = "999999";

      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("session_key", session_key);

      setUser(loggedUser);
      navigate("/");
    }
  };

  const logout = () => {
    console.log("logout");

    localStorage.removeItem("user");
    localStorage.removeItem("session_key");

    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
