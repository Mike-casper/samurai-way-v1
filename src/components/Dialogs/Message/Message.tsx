import React from "react";
import s from "./../Dialogs.module.css"

export type MessageDataType={
    id?:number,
    message:string
}


export const Message = (props: MessageDataType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
