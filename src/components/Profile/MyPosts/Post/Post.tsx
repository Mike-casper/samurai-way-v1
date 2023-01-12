import React from "react";
import s from "./Post.module.css";

export const Post = (props:any) => {
    return(

                    <div className={s.item}>
                        <img src="https://api.kyivindependent.com/storage/2021/12/loveyoustepan.-instagram-1024x683.jpg"/>
                        {props.message}
                        <div>
                        <span>like {props.likeCounts}</span>
                        </div>
                    </div>
    )
}