import React from "react";
import {MyPostsType, ProfilePageType} from "./state";

type addPostActionType = ReturnType<typeof addPostAC>
type updateNewPostText = ReturnType<typeof updateNewPostTextAC>
export type profilePageReducerType = addPostActionType | updateNewPostText

const ADD_POST = "ADD-POST";

// type addPostActionType = {
//     type: "ADD-POST"
//     PostMessage: string
// }
// type updateNewPostTextType = {
//     type:"UPDATE-NEW-POST-TEXT"
//     newTextPost: text
// }

export const ProfilePageReducer = (state: ProfilePageType, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: MyPostsType = {
                id: 5,
                message: action.PostMessage,
                likeCount: 22
            };
            state.postData.push(newPost);
            state.messageForNewPost = " "
            // this._state.profilePage.postData.push(newPost);
            // this._state.profilePage.messageForNewPost = " "
            // this._callSubscriber();
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.messageForNewPost = action.newTextPost
            // this._state.profilePage.messageForNewPost = action.newTextPost;
            // this._callSubscriber()
            return state;
        default:
            return state
    }
}
export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        PostMessage: newPostText
    } as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newTextPost: text
    } as const
}

