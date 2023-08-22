"use client";

import AuthInput from "../../components/AuthInput";
import Link from "next/link";
import { useState } from "react";
import { makeRequest } from "../../../../axios";
import { useRouter } from "next/navigation";

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
      <AuthInput label="Email:" newState={setEmail} IsPassword={false} />
      <AuthInput label="password" newState={setPassword} IsPassword />
      {error.length > 0 && <span className="next-red-600">* {error}</span>}
      <button className="bg-green-600 py-3 font-bold text-white rounded-lg hover:bg-green-800" onClick={(e) => handleLogin()}>ENTRAR</button>
      <Link href="/register" className="text-center underline">Cadastrar-se</Link>
    </>
  );
}

export default Login;