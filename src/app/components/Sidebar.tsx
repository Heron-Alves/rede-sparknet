import Link from "next/link";
import { useState } from "react";
import { 
    FaUserFriends,
    FaAlignLeft, 
    FaPeopleArrows,
    FaStore,
    FaBookmark,
    FaFlag,
    FaCalendar
} from "react-icons/fa";

import { TbDeviceImac, TbClockHour4 } from "react-icons/tb";

function Sidebar() {

    const [user, setUser] = userState({userImg:""})

    return (
        <aside className="pl-4 ">
            <nav className="flex flex-col gap-6 text-gray-600 font-semibold">
                <Link href='' className="flex gap-2 pb-6 items-center">
                <img src={userAgent.userImg.length > 0? userAgent.userImg:"https://img.freepik.com/free-icon/   user_318-159711.jpg" 
                } alt="Imagem do perfil" className="w-8 h-8 rounded-full"/><span>Usuario</span></Link>
                <Link href='' className="flex gap-3"><FaUserFriends className="w-6 h-6"/>Amigos</Link>
                <Link href=''><FaAlignLeft/>Feed</Link>
                <Link href=''><FaPeopleArrows/>Grupos</Link>
                <Link href=''><FaStore/>Loja</Link>
                <Link href=''><TbDeviceImac/>Watch</Link>
                <Link href=''><TbClockHour4/>Lembranças</Link>
                <Link href=''><FaBookmark/>Salvo</Link>
                <Link href=''><FaFlag/>Pagina</Link>
                <Link href=''><FaCalendar/>Eventos</Link>
            </nav>        
        </aside>
    );
}

export default Sidebar;