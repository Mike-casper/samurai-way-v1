import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem, DialogsType} from "./DialogItem/DialogsItem";
import {Message, MessageDataType} from "./Message/Message";

type MainPropsType = {
    message:DialogsPropsType
    changeNewDataTextCB:(text:string)=>void
    addMessage:(CurrentMessage:string)=>void
    newPostDataText:string
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
        props.changeNewDataTextCB(e.currentTarget.value)
    }
    const addMessage=()=>{
        props.addMessage(props.newPostDataText)
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