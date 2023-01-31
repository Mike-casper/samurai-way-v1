import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem, DialogsType} from "./DialogItem/DialogsItem";
import {Message, MessageDataType} from "./Message/Message";

type MainPropsType = {
    state:DialogsPropsType
}
type DialogsPropsType= {
    dialogs:Array<DialogsType>
    messagesData:Array<MessageDataType>
}

export const Dialogs = (props:MainPropsType) => {

    let messagesElements = props.state.messagesData.map(el =>
        <Message message={el.message}/>)

    let dialogsElements = props.state.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>)


    const addMessage =() =>{
        alert(PostElement.current?.value)
    }
    const PostElement = React.createRef<HTMLTextAreaElement>();

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
                <textarea ref = {PostElement}>

                </textarea>
                    </div>
                <div>
                    <button onClick={addMessage}>
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