"use client"
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import AuthPage from "../components/AuthPage";
import AuthInput from "../components/Authinput";

function Login(e: any) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    e.preventDefault()
    axios.post("http://localhost:8000/api/auth/login", { email, password }).then((res) => {
      console.log(res.data);
      setError('')
    }).catch((err) => {
      console.log(err);
      setError(err.response.msg)
    })
  }

  return (
    <AuthPage>
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
    </AuthPage>
  );
}

export default Login;