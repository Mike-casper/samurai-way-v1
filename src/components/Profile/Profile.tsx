import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes} from "../../redux/state";
// import {changeNewText} from "../../redux/state";

type MainPropsType = {
   profilePage:PostPropsType
    newPostText:string
    dispatch:(action:ActionsTypes)=>void
    // addPost:(message: string)=>void
    // changeNewTextCallback:(newText:string)=>void
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
            <MyPosts postData={props.profilePage.postData}
                     newPostText={props.newPostText}
                     // addPost={props.addPost}
                     // changeNewTextCallback={props.changeNewTextCallback}
                     dispatch={props.dispatch}
            />
        </div>
    )
}