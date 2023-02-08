import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

type MainPropsType= {
    postData:Array<MyPostsType>
    addPost:(message: string)=>void
    newPostText:string
    changeNewTextCallback:(newText:string)=>void

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
        props.addPost(props.newPostText)
        props.changeNewTextCallback(" ")
    }
    const newTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        props.changeNewTextCallback(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>
                My post
            </h3>
            <div>
                <div>
                        <textarea value={props.newPostText} onChange={newTextChangeHandler} />
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