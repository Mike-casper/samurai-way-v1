import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = (props:any) => {
    return(
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <Post message="Hi, how are you?" likeCounts="15"/>
                    <Post message="IT's my new post" likeCounts="25"/>

                </div>
            </div>
    )
}