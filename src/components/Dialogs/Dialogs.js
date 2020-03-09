import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import css from "./dialogs.module.css";


export function Dialogs (props) {

    let DialogsDataElements = props.dialogsPage.dialogs.map(
        value => <DialogItem name={value.name} id={value.id}/>);

    let MessageDataElements = props.dialogsPage.messages.map(
        value => <Message text={value.text}/>);

    return (
        <div className={css.dialogsContainer}>

            <div className={css.dialogs}>
                {DialogsDataElements}
            </div>
            <div className={css.messages}>
                {MessageDataElements}

            </div>
        </div>
    )
}

