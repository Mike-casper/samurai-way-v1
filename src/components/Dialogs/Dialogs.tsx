import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem, DialogsType} from "./DialogItem/DialogsItem";
import {Message, MessageDataType} from "./Message/Message";
import {ActionsTypes} from "../../redux/state";

type MainPropsType = {
    message:DialogsPropsType
    newPostDataText:string
    dispatch:(action:ActionsTypes)=>void
    // addMessage:(CurrentMessage:string)=>void
    // changeNewDataTextCB:(text:string)=>void
}
type DialogsPropsType= {
    dialogs:Array<DialogsType>
    messagesData:Array<MessageDataType>
}

export const Dialogs = (props:MainPropsType) => {

    let messagesElements = props.message.messagesData.map(el =>
        <Message message={el.message}/>)

    let dialogsElements = props.message.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>)


    const newDataTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        props.dispatch({type:"CHANGE-NEW-DATA-TEXT", text:e.currentTarget.value})
        // props.changeNewDataTextCB(e.currentTarget.value)
    }
    const addMessage=()=>{
        props.dispatch({type:"ADD-MESSAGE", CurrentMessage:props.newPostDataText})
        // props.addMessage(props.newPostDataText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }
                <div className={s.dialog + " " + s.active}>
                    {/*<NavLink to="/dialogs/1">Dimych</NavLink>*/}

                </div>
                <div>
                <textarea value={props.newPostDataText} onChange={newDataTextChangeHandler}/>
                    </div>
                <div>
                    <button onClick={ addMessage}>
                        Add message
                    </button>
                </div>
            </div>
            <div className={s.messages}>
                {
                    messagesElements
                }
            </div>
        </div>

    )
}