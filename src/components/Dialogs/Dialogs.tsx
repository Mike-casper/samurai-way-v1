import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


export const DialogItem = (props: any) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export const Message = (props: any) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Lola"},
        {id: 4, name: "Valera"},
        {id: 5, name: "Sveta"},
        {id: 6, name: "Viktor"},
    ];

    let messagesData = [
        {id: 1, message: "How's you name"},
        {id: 2, message: "SSS"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Whta's your country"},
        {id: 5, message: "WWW"},
        {id: 6, message: "Viktor"},
    ];

    let messagesElements = messagesData.map(el =>
        <Message message={el.message}/>)

    let dialogsElements = dialogs.map(dialog =>
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