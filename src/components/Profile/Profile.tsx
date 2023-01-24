import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type MainPropsType= {
    postData:Array<MyPostsType>
}

type MyPostsType ={
    id: number,
    message: string,
    likeCount:number
}

export const Profile = (props:MainPropsType) => {

    // let postData = [
    //     {id: 1, message: "How are you?", likeCount:12},
    //     {id: 2, message: "First post", likeCount: 21},
    //     {id: 3, message: "SSSS?", likeCount:12},
    //     {id: 4, message: "Firth sss", likeCount: 121}
    // ];

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}  />
        </div>
    )
}