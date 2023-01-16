import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = (props: any) => {

    let postData = [
        {id: 1, message: "How are you?", likeCount:12},
        {id: 2, message: "First post", likeCount: 21},
    ];

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
                <Post message={postData[0].message} likeCounts={postData[0].likeCount}/>
                <Post message={postData[1].message} likeCounts={postData[1].likeCount}/>

            </div>
        </div>
    )
}