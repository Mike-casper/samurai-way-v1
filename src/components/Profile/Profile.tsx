import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type MainPropsType = {
    state:PostPropsType
}
type PostPropsType= {
    postData:Array<MyPostsType>
}

type MyPostsType ={
    id: number,
    message: string,
    likeCount:number
}

export const Profile = (props:MainPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData}  />
        </div>
    )
}