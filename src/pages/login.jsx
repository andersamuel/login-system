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
    login(email, password);
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-full max-w-[480px] h-auto bg-gray-1400 rounded-md p-16">
        {/* <img src={rocketseat} alt="" className="mx-auto mb-8" /> */}
        <section className="grid grid-flow-row gap-2">
          <div className="w-full relative flex group">
            <input
              type="text"
              placeholder="E-mail"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 rounded-md bg-gray-1600 pl-12 flex-1 outline-none text-sm text-white border-2 border-transparent focus-visible:border-purple-600 focus:border-green-400 transition-colors placeholder:text-gray-1100 group"
            />
            <HiMail className="absolute top-[50%] translate-y-[-50%] left-4 text-gray-1100 transition-colors" />
          </div>
          <div className="w-full relative flex">
            <input
              type={eye ? "text" : "password"}
              placeholder="Senha"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 rounded-md bg-gray-1600 pl-12 flex-1 outline-none text-sm text-white border-2 border-transparent focus-visible:border-purple-600 focus:border-green-400 transition-colors placeholder:text-gray-1100"
            />
            <HiLockClosed className="absolute top-[50%] translate-y-[-50%] left-4 text-gray-1100 transition-colors" />
            {eye ? (
              <HiEyeOff
                className="absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer text-purple-600 transition-colors"
                onClick={seePassword}
              />
            ) : (
              <HiEye
                className="absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer text-purple-600 transition-colors"
                onClick={seePassword}
              />
            )}
          </div>
        </section>
        <a
          href="/"
          className="text-xs text-purple-600 font-bold ml-1 hover:text-purple-500 transition-colors mt-1"
        >
          Esqueci minha senha
        </a>
        <button
          className="w-full h-12 mt-4 rounded-md bg-purple-700 text-gray-100 font-semibold uppercase hover:brightness-125 transition-all"
          onClick={handleLogin}
        >
          Entrar
        </button>
        <span className="w-full flex justify-center text-gray-400 mt-7 text-sm font-semibold">
          Não tem uma conta?
          <a
            href="/"
            className="ml-1 text-purple-600 font-semibold hover:text-purple-500 transition-colors"
          >
            Registre-se
          </a>
        </span>
        <span className="flex items-center mt-12">
          <p className="whitespace-nowrap mr-6 self-center font-semibold text-gray-400">
            Ou entre com
          </p>
          <a
            href="/"
            className="w-full h-12 rounded-md bg-gray-1200 font-semibold uppercase flex items-center justify-center text-gray-400 hover:brightness-125 transition-all group"
          >
            <AiFillGithub className="w-7 h-7 mr-3 group-hover:text-purple-700 transition-colors" />
            GitHub
          </a>
        </span>
      </div>
    </div>
  );
};

export default Login;
