import React, { useContext, useState } from "react";

import { AuthContext } from "../contexts/AuthContext";

import { AiFillGithub } from "react-icons/ai";
import { HiMail, HiLockClosed, HiEye, HiEyeOff } from "react-icons/hi";

import rocketseat from "../assets/images/rocketseat.svg";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [eye, setEye] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const seePassword = () => setEye(!eye);

  const handleLogin = () => {
    console.log("submit", { email, password });
    login(email, password);
  };

  return (
    <div className="login">
      <div className="login-container">
        <img src={rocketseat} alt="" />
        <section>
          <div className="inputs">
            <input
              type="text"
              placeholder="E-mail"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <HiMail className="type" />
          </div>
          <div className="inputs">
            <input
              type={eye ? "text" : "password"}
              placeholder="Senha"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <HiLockClosed className="type" />
            {eye ? (
              <HiEyeOff className="eye" onClick={seePassword} />
            ) : (
              <HiEye className="eye" onClick={seePassword} />
            )}
          </div>
        </section>
        <a href="/" className="recover">
          Esqueci minha senha
        </a>
        <button className="login" onClick={handleLogin}>
          Entrar
        </button>
        <span>
          Não tem uma conta? <a href="/">Registre-se</a>
        </span>
        <span className="github">
          <p>Ou entre com</p>
          <a href="/">
            <AiFillGithub /> GitHub
          </a>
        </span>
      </div>
    </div>
  );
};

export default Login;
