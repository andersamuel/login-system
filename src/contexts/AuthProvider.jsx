import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/axios";
import { AuthContext } from "./AuthContext";

export const AuthProvider = (props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recovered_id = localStorage.getItem("_id");
    const recoveredToken = localStorage.getItem("token");

    if (recovered_id && recoveredToken) {
      validate(recovered_id, recoveredToken);
    }

    if (!recovered_id || !recoveredToken) navigate("/login");

    setLoading(false);
  }, []);

  const validate = async (_id, token) => {
    await api.post("/validatetoken", { _id, token }).then((response) => {
      if (response.data.auth === true) {
        setUser(_id);
        navigate("/");
      } else {
        localStorage.removeItem("_id");
        localStorage.removeItem("token");

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(null);
        navigate("/login");
      }
    });
  };

  const login = async (email, password) => {
    await api
      .post("/authenticate", { email, password })
      .then((response) => {
        if (response.data.auth === true) {
          const _id = response.data._id;
          const token = response.data.token;

          localStorage.setItem("_id", _id);
          localStorage.setItem("token", token);

          api.defaults.headers.Authorization = `Bearer ${token}`;

          setUser(_id);
          navigate("/");
        } else {
          alert("Erro de autenticação.");
        }
      })
      .catch((error) => console.error(error));
  };

  const logout = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("token");

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
