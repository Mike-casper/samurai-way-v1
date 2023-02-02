import React from "react";
import {rerender} from "../render";

// export type StatePropsType = {
//     state:ProfilePageType
// }
// export type MainPropsType= {
//     dialogs:Array<DialogsType>
//     messagesData:Array<MessageDataType>
//     postData:Array<MyPostsType>
// }


type MessageDataType = {
    id?: number,
    message: string
}
type DialogsType = {
    id: number,
    name: string
}
type MyPostsType = {
    id: number,
    message: string,
    likeCount: number
}
type ProfilePageType = {
    postData: Array<MyPostsType>

}

type MessagePageType = {
    messagesData: Array<MessageDataType>
    dialogs: Array<DialogsType>
}
export type StatePropsType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType

}
export type MainPropsType = {
    state: StatePropsType
    addPost:(PostMessage: string)=>void
}

export const state:StatePropsType = {
    profilePage: {
        postData:
            [{id: 1, message: "How are you?", likeCount: 12},
                {id: 2, message: "First post", likeCount: 21},
                {id: 3, message: "SSSS?", likeCount: 12},
                {id: 4, message: "Firth sss", likeCount: 121}
            ],
    },
    messagePage: {
        messagesData:
            [
                {id: 1, message: "How's you name"},
                {id: 2, message: "SSS"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Whta's your country"},
                {id: 5, message: "WWW"},
                {id: 6, message: "Viktor"},
            ],
        dialogs:
            [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrew"},
                {id: 3, name: "Lola"},
                {id: 4, name: "Valera"},
                {id: 5, name: "Sveta"},
                {id: 6, name: "Viktor"},
            ],
    }
}

export const addPost = (PostMessage: string) => {

    const newPost:MyPostsType = {
        id: 5,
        message: PostMessage,
        likeCount: 22
    };
    state.profilePage.postData.push(newPost);

    rerender(state);
}