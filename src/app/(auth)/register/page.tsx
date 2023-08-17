"use client";

import AuthInput from "@/app/components/AuthInput";
import { useState } from "react";
import Link from "next/link";
import { makeRequest } from "../../../../axios";

function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (e: any) => {
        e.preventDefault()
        makeRequest.post("auth/register", { username, email, password, confirmPassword }).then((res) => {
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
        <>
            <h1 className="font-bold text-2xl ">REGISTER</h1>
            <AuthInput label="Nome:" newState={setUsername} />
            <AuthInput label="Email:" newState={setEmail} />
            <AuthInput label="Senha:" newState={setPassword} IsPassword />
            <AuthInput label="confirme a sua senha:" newState={setconfirmPassword} IsPassword />
            {error.length > 0 && <span className="next-red-600">* {error}</span>}
            {success.length > 0 && <span className="next-green-600">* {success}</span>}
            <button className="bg-green-600 py-3 font-bold text-white rounded-lg hover:bg-green-800" onClick={(e) => handleRegister(e)}>Cadastrar-se</button>
            <Link href="/login" className="text-center underline">Logar</Link>
        </>
    );
}

export default Register;