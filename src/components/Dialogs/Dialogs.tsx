import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type MainPropsType = {
    state:DialogsPropsType
}
type DialogsPropsType= {
    dialogs:Array<DialogsType>
    messagesData:Array<MessageDataType>
}
type MessageDataType={
    id?:number,
    message:string
}

type DialogsType ={
    id: number,
    name:string
}

export const DialogItem = (props: DialogsType) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export const Message = (props: MessageDataType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = (props:MainPropsType) => {

    let messagesElements = props.state.messagesData.map(el =>
        <Message message={el.message}/>)

    let dialogsElements = props.state.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>)



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }
                <div className={s.dialog + " " + s.active}>
                    {/*<NavLink to="/dialogs/1">Dimych</NavLink>*/}

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