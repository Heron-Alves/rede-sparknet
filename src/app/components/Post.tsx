import { FaThumbsUp, FaRegComment, FaPaperPlane } from "react-icons/fa";
import { useState, useEffect } from "react";


interface IPost {
    id: number,
    post_desc: string,
    img: string,
    username: string,
    userImg: string,
    created_at: string,
}

interface IUser {
    userImg: string,
    userName: string,
}

function Post(props: { post: IPost }) {

    const { post_desc, img, username, userImg, created_at } = props.post
    const [user, setUser] = useState<IUser | undefined>(undefined);

    useEffect(() => {
        let value = localStorage.getItem("rede-sparknet:user")
        if (value) {
            setUser(JSON.parse(value));
        }
    }, []);

    let date = new Date(created_at)
    let formateDate = date.getDate() + " " + (date.getMonth() + 1) + "/" + date.getYear();

    return (
        <div className="w-1/3 bg-white rounded-lg p-4 shadow-md">
            <header className="flex gap-2 pb-4 border-b items-center">
                <img
                    className="w-8 h-8 rounded-full"
                    src={userImg ? userImg : "https://papeldeparededecore.com.br/2119-large_default/quadro-decorativo-paisagem-ao-por-do-sol.jpg"} alt="imagem do usuario que fez o post" />
                <div className="flex flex-col">
                    <span className="font-semibold">{username}</span>
                    <span className="text-xs">{formateDate}</span>
                </div>
            </header>
            {post_desc && (
                <div className="py-4 w-full">
                    <span>{post_desc}</span>
                </div>
            )}
            {img && <img className="rounded-lg" src={img} alt="imagem do post" />}
            <div className="flex justify-between py-4 border-b">
                <div className="flex gap-1 items-center">
                    <span className="bg-bule-600 w-6 h-6 text-white flex items-center justify-center rounded-full text-xs">
                        <FaThumbsUp />
                    </span>3
                </div>
                <span>5 comentarios</span>
                <div className="flex justify-around py-4 text-gay-600">
                    <button className="flex items-center gap-1"><FaThumbsUp />Curtir</button>
                    <button className="flex items-center gap-1"><FaRegComment />Comentar</button>
                </div>
            </div>
            <div className="flex gap-4 pt-6">
                <img
                    src={user?.userImg ? user.userImg : "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Imagem do perfil" className="w-8 h-8 rounded-full"/>
                <div>
                    <div className="w-full bg-zinc-100 flex items-center text-gray-600 px-3 py-1 rounded-full">
                        <input type="text" className="bg-zinc-100 w-full focus-visible:outline-none" />
                        <FaPaperPlane />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;