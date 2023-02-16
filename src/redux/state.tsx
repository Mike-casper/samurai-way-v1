import React from "react";
import {rerender} from "../index";
// import {rerender} from "../render"; якобы удалили этот файл в 35 уроке

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
    messageForNewPost: string
    postData: Array<MyPostsType>
}

type MessagePageType = {
    messagesData: Array<MessageDataType>
    dialogs: Array<DialogsType>
    messageForNewData: string
}
export type StatePropsType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType


}
export type MainPropsType = {
    state: StatePropsType
    addPost: (PostMessage: string) => void
    addMessage: (CurrentMessage: string) => void
    changeNewText: (newText: string) => void
    changeNewDataText: (text: string) => void
}

export type StoreType = {
    _state: StatePropsType,
    _callSubscriber: () => void,
    addMessage: (CurrentMessage: string) => void,
    subscribe: (observer: () => void) => void,
    getState: () => StatePropsType
    changeNewDataText: (text: string) => void
    dispatch: (action: ActionsTypes) => void
    // _addPost: (PostMessage: string) => void
    // changeNewText: (newText: string) => void

}
type addPostActionType = {
    type: "ADD-POST"
    PostMessage: string
}
type updateNewPostText = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type ActionsTypes = addPostActionType | updateNewPostText

export let store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "it-kamasutra.com",
            postData:
                [{id: 1, message: "How are you?", likeCount: 12},
                    {id: 2, message: "First post", likeCount: 21},
                    {id: 3, message: "SSSS?", likeCount: 12},
                    {id: 4, message: "Firth sss", likeCount: 121}
                ],
        },
        messagePage: {
            messageForNewData: "www",
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
    },
    _callSubscriber() {
        console.log(" state is changed")
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },

    addMessage(CurrentMessage: string) {
        let newMessage: MessageDataType = {
            id: 1,
            message: CurrentMessage
        };
        this._state.messagePage.messagesData.push(newMessage);
        this._state.messagePage.messageForNewData = " "
        this._callSubscriber()
    },
    changeNewDataText(text: string) {
        store._state.messagePage.messageForNewData = text;
        store._callSubscriber()
    },
    // changeNewText(newText: string) {
    //     this._state.profilePage.messageForNewPost = newText;
    //     this._callSubscriber()
    // },
    // _addPost(PostMessage: string) {
    //     let newPost: MyPostsType = {
    //         id: 5,
    //         message: PostMessage,
    //         likeCount: 22
    //     };
    //     this._state.profilePage.postData.push(newPost);
    //     this._state.profilePage.messageForNewPost = " "
    //     this._callSubscriber();
    // },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost: MyPostsType = {
                id: 5,
                message: action.PostMessage,
                likeCount: 22
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.messageForNewPost = " "
            this._callSubscriber();

        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.messageForNewPost = action.newText;
            this._callSubscriber()
        }
    }
}

// export const changeNewText=(newText: string)=> {
//      store._state.profilePage.messageForNewPost = newText;
//      store._callSubscriber()
//  }
// export const changeNewDataText=(text: string)=> {
//     store._state.messagePage.messageForNewData = text;
//     store._callSubscriber()
// }

// export const state: StatePropsType = {
//     profilePage: {
//         messageForNewPost: "it-kamasutra.com",
//         postData:
//             [{id: 1, message: "How are you?", likeCount: 12},
//                 {id: 2, message: "First post", likeCount: 21},
//                 {id: 3, message: "SSSS?", likeCount: 12},
//                 {id: 4, message: "Firth sss", likeCount: 121}
//             ],
//     },
//     messagePage: {
//         messageForNewData: "www",
//         messagesData:
//             [
//                 {id: 1, message: "How's you name"},
//                 {id: 2, message: "SSS"},
//                 {id: 3, message: "Yo"},
//                 {id: 4, message: "Whta's your country"},
//                 {id: 5, message: "WWW"},
//                 {id: 6, message: "Viktor"},
//             ],
//         dialogs:
//             [
//                 {id: 1, name: "Dimych"},
//                 {id: 2, name: "Andrew"},
//                 {id: 3, name: "Lola"},
//                 {id: 4, name: "Valera"},
//                 {id: 5, name: "Sveta"},
//                 {id: 6, name: "Viktor"},
//             ],
//     }
// }
// export const addPost = (PostMessage: string) => {
//     let newPost: MyPostsType = {
//         id: 5,
//         message: PostMessage,
//         likeCount: 22
//     };
//
//     state.profilePage.postData.push(newPost);
//     state.profilePage.messageForNewPost = " "
//     rerender();
// }
// export const addMessage = (CurrentMessage: string) => {
//     let newMessage: MessageDataType = {
//         id: 1,
//         message: CurrentMessage
//     };
//     state.messagePage.messagesData.push(newMessage);
//     state.messagePage.messageForNewData = " "
//     rerender()
// }
// export const changeNewText = (newText: string) => {
//     state.profilePage.messageForNewPost = newText;
//     rerender()
// }
// export const changeNewDataText = (text: string) => {
//     state.messagePage.messageForNewData = text;
//     rerender()
// }
// export const subscribe = (observer: () => void) => {
//     rerender = observer;


