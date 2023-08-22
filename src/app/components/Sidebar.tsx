import { Coming_Soon } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAlignLeft, FaPeopleArrows, FaUserFriends, FaStore, FaBookmark, FaFlag, FaCalendar } from "react-icons/fa";
import {TbDeviceImac, TbClockHour4} from "react-icons/tb";

interface IUser{
    userImg:string,
    userName:string,
}


function Sidebar() {

    const [user, setUser] = useState<IUser | undefined>(undefined);

    useEffect(()=> {
        let value = localStorage.getItem("rede-sparknet:user")
        if(value){
            setUser(JSON.parse(value));
        }
    },[]);

    return (
        <aside className="pl-4">
            <nav className="flex flex-col gap-6 text-600 font-semibold">
                <Link href="" className="flex gap-2 pb-6 items-center">
                <img 
                    src={user?.userImg ? user.userImg:"https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Imagem do perfil" className="w-8 h-8 rounded-full
                        "/>
                    <span>{user?.userName}</span>
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaUserFriends  className="w-6 h-6"/>
                    Amigos
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaUserFriends className="w-6 h-6"/>
                    Amigos
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaAlignLeft className="w-6 h-6"/>
                    Feed
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaPeopleArrows className="w-6 h-6"/>
                    Grupos
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaStore className="w-6 h-6"/>
                    Loja
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaBookmark className="w-6 h-6"/>
                    Salvo
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaFlag className="w-6 h-6"/>
                    Pagina
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaCalendar className="w-6 h-6"/>
                    Eventos
                </Link>
                <Link href="">
                    <TbDeviceImac className="w-6 h-6"/>
                    Watch
                </Link>
                <Link href="">
                    <TbClockHour4 className="w-6 h-6"/>
                    Lembranças
                </Link>
            </nav>
        </aside>
    )
}

export default Sidebar;