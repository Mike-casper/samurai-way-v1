import React from "react";
import {MessagePageType} from "./store";
import {MessageDataType} from "../components/Dialogs/Message/Message";

type  addMessageActionType = ReturnType<typeof addMessageAC>
type updateNewDataDialogsActionType = ReturnType<typeof updateNewDataDialogsTextAC>
export type dialogReducerType = addMessageActionType | updateNewDataDialogsActionType

let initialState ={
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

export const dialogReducer = (state: MessagePageType = initialState, action: any) => {
    switch (action.type) {
        case "ADD-MESSAGE":

            let newMessage: MessageDataType = {
                id: 1,
                message: action.CurrentMessage
            };
            state.messagesData.push(newMessage);
            state.messageForNewData = " ";
            // this._state.messagePage.messagesData.push(newMessage);
            // this._state.messagePage.messageForNewData = " "
            // this._callSubscriber()
            return state
        case "CHANGE-NEW-DATA-TEXT":
            state.messageForNewData = action.newTextMessage;
            // store._state.messagePage.messageForNewData = action.newTextMessage;
            // store._callSubscriber()
            return state;
        default:
            return state
    }
}
export const addMessageAC = (newPostDataText: string) => {
    return {
        type: "ADD-MESSAGE",
        CurrentMessage: newPostDataText
    } as const
}
export const updateNewDataDialogsTextAC = (text: string) => {
    return {
        type: "CHANGE-NEW-DATA-TEXT",
        newTextMessage: text
    } as const
}

