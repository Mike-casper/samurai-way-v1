import React from "react";
import {MessagePageType} from "./state";
import {MessageDataType} from "../components/Dialogs/Message/Message";

type  addMessageActionType = ReturnType<typeof addMessageAC>
type updateNewDataDialogsActionType = ReturnType<typeof updateNewDataDialogsTextAC>
export type dialogReducerType = addMessageActionType | updateNewDataDialogsActionType

export const dialogReducer = (state: MessagePageType, action: any) => {
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

