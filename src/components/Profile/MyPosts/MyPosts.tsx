import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = (props: any) => {

    let postData = [
        {id: 1, message: "How are you?", likeCount:12},
        {id: 2, message: "First post", likeCount: 21},
    ];
    let postsElements = postData.map(el=>
        <Post message={el.message} likeCounts={el.likeCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>
                My post
            </h3>
            <div>
                <div>
                        <textarea>

                        </textarea>
                </div>
                <div>
                    <button>
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