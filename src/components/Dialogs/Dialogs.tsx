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

    let dialogsData = [
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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    {/*<NavLink to="/dialogs/1">Dimych</NavLink>*/}
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name="Andrew" id="2"/>
                    <DialogItem name="Sveta" id="3"/>
                    <DialogItem name="Viktor" id="4"/>
                    <DialogItem name="Valera" id="5"/>
                </div>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>

    )
}