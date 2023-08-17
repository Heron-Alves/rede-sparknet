import Link from "next/link";
import { useRouter } from "next/navigation";
import {FaSearch, FaBell} from "react-icons/fa";
import {TbMessageCircle2Filled} from "react-icons.tb";
import { useRouter } from "next/router";

function Header() {

    const [user,setuser] = useState ({username:'', userImg:''});
    const [shadow,setShadow] = useState (false);
    const router = useRouter()

    useEffect(()=> {
        let value = localStorage.getItem("rede-sparknet:user")
        if(value){
            setDefaultResultOrder(JSON.parse(value));
        }
    },[]);

    const logout = (e:any)=> {
        e.preventDefault();
        localStorage.removeItem("rede-sparknet:token");
        router.push('/login');
    }

    return (
        <header className="w-fill bg-white flex justify-between py-2 px-4 items-center shadow-md">
            <Link href='/' className="font-bold text-sky-900 text-lg ">SPARKNET</Link>
            <div className="flex bg-zinc-100 items-center text-gray-600 px-3 py-1 rounded-full">
                <input type="text" placeholder="Pesquisar" className="bg-zinc-100 focus-visible:outline-none"/>
                <FaSearch/>
            </div>
            <div className="flex gap-5 items-center text-gray-600">
                <div className="flex gap-3">
                    <button className="bg-zinc-200 p-2 rounded-full hover?:bg-zinc-300">
                        <TbMessageCircle2Filled/>
                    </button>
                    <button className="bg-zinc-200 p-2 rounded-full hover?:bg-zinc-300">
                        <FaBell/>
                    </button>
                </div>
                <div className="relative" onMouseLeave={()=>setShowMenu(false)}>
                    <button className="flex gap-2 items-center" onClick={()=>setShowMwnu(!showMenu)}>
                        <img src={user.userImg.length > 0? user.img :"https://img.freepik.com/free-icon/    user_318-159711.jpg"} alt="Imagem do perfil" className="w-8 h-8 rounded-full
                        "/>
                        <span className="font-bold">{user.username}</span>
                    </button>
                    {showMenu && (
                        <div className="absolute fle flex-col bg-white p-4 shadow-md rounded-md gap-2 border-t whitespace-nowrap right-[-5px]">
                            <Link href='' className="border-b">Editar perfil</Link>
                            <Link href='' onClick={(e)=>logout}>Logout</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}