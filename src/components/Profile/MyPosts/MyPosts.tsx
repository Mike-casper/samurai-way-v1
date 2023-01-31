import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

type MainPropsType= {
    postData:Array<MyPostsType>

}

type MyPostsType ={
    id: number,
    message: string,
    likeCount:number
}

export const MyPosts = (props:MainPropsType) => {

    // let postData = [
    //     {id: 1, message: "How are you?", likeCount:12},
    //     {id: 2, message: "First post", likeCount: 21},
    //     {id: 3, message: "SSSS?", likeCount:12},
    //     {id: 4, message: "Firth sss", likeCount: 121}
    // ];

    let postsElements = props.postData.map(el=>
        <Post message={el.message} likeCounts={el.likeCount}/>)

    const addPost =() =>{
        alert(newPostElement.current?.value)
    }
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    return (
        <div className={s.postsBlock}>
            <h3>
                My post
            </h3>
            <div>
                <div>
                        <textarea ref={newPostElement} >
                        </textarea>
                </div>
                <div>
                    <button onClick={addPost}>
                        Add post
                    </button>
                </div>
                New post
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}