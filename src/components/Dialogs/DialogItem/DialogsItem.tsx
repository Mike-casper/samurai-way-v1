import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

export type DialogsType ={
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
