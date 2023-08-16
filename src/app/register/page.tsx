"use client";

import AuthPage from "../components/AuthPage";
import AuthInput from "../components/Authinput";
import { useState } from "react";
import axios from "axios";
import { error } from "console";
import Link from "next/link";

function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (e: any) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/auth/register", { username, email, password, confirmPassword }).then((res) => {
            console.log(res.data)
            setSuccess(res.data.msg)
            setError('')
        }).catch((err) => {
            console.log(err);
            setError(err.response.data.msg)
            setPassword('')
        });
    }


    return (
        <AuthPage>
            <h1 className="font-bold text-2xl ">REGISTER</h1>
            <AuthInput label="Nome:" newState={setUsername} />
            <AuthInput label="Email:" newState={setEmail} />
            <AuthInput label="Senha:" newState={setPassword} IsPassword />
            <AuthInput label="confirme a sua senha:" newState={setconfirmPassword} IsPassword />
            {error.length > 0 && <span className="next-red-600">* {error}</span>}
            {success.length > 0 && <span className="next-green-600">* {success}</span>}
            <button className="bg-green-600 py-3 font-bold text-white rounded-lg hover:bg-green-800" onClick={(e) => handleRegister(e)}>Cadastrar-se</button>
            <Link href="/login" className="text-center underline">Logar</Link>
        </AuthPage>
    );
}

export default Register;