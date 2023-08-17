import {FaThumbsUp, FaRegComment, FaPaperPlane} from "react-icons/fa";
import {useState, useEffect} from "react";

interface IPost {
    id: number;
    post_desc: string;
    img: string;
    username: string;
    userImg: string;
}

interface IUser {
    userImg: string;
    username: string;
}

function Post(props: {post: IPost}) {
    const { post_desc, img, username, userImg_} = props.post;
    const [user, setUser] = userState<IUser | undefined>(undefined);

    useEffect(() => {
        let value = localStorage.getItem("rede-sparknet:user");
        if (value){
            setUser(JSON.parse(value));
        }
    }, []);

    return (
        <div className="w-1/3 bg"
    )
}