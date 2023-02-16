import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ActionsTypes} from "../../../redux/state";

type MainPropsType= {
    postData:Array<MyPostsType>
    // addPost:(message: string)=>void
    newPostText:string
    changeNewTextCallback:(newText:string)=>void
    dispatch:(action:ActionsTypes)=>void

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
        // props.addPost(props.newPostText)
        props.dispatch({type:"ADD-POST", PostMessage:props.newPostText})
    }

    const newTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText:e.currentTarget.value})
        // props.changeNewTextCallback(e.currentTarget.value)
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