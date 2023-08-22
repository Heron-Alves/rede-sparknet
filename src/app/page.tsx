"use client";

import Header from "../app/components/Header";
import Sidebar from "../app/components/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Feed from "./components/Feed";


export default function Home() {
  const router = useRouter();

  useEffect(()=>{
    let value = localStorage.getItem("rede-sparknet:token"); 
    if(!value) {
      router.push('/login')
    }
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-100">
      <Header />
      <div className="w-full flex justify-start pt-10">
        <Sidebar />
        <Feed />
      </div>
    </main>
  );
}
