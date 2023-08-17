"use client";

import AuthInput from "../../components/AuthInput";
import Link from "next/link";
import { useState } from "react";
import { makeRequest } from "../../../../axios";
import { useRouter } from "next/router";

function Login(e: any) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleLogin = () => {
    e.preventDefault()
    makeRequest.post("auth/login", { email, password }).then((res) => {
      localStorage.setItem("rede-sparknet:user", JSON.stringify(res.data.data.user));
      localStorage.setItem("rede-sparknet:token", JSON.stringify(res.data.data.token));
      setError('');
      router.push('/');
    }).catch((err) => {
      console.log(err);
      setError(err.response.msg)
    })
  }

  return (
    <>
      <h1 className="font-bold text-2xl ">LOGIN</h1>
      <AuthInput label="Email:" newState={setEmail} />
      <AuthInput label="password" newState={setPassword} IsPassword />
      <div className="flex flex-col justify-between items-start">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" onChange={(e) => setPassword(e.currentTarget.value)} className="border-gray-400 border-b w-full focus-visible:border-gray-700 focus-visible:border-b focus-visible:outline-none" />
      </div>
      {error.length > 0 && <span className="next-red-600">* {error}</span>}
      <button className="bg-green-600 py-3 font-bold text-white rounded-lg hover:bg-green-800" onClick={(e) => handleLogin(e)}>ENTRAR</button>
      <Link href="/register" className="text-center underline">Cadastrar-se</Link>
    </>
  );
}

export default Login;