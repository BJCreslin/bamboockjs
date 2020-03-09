import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import css from "./dialogs.module.css";
import {createNewMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/State";


export function Dialogs(props) {

    let DialogsDataElements = props.store.getState().dialogsPage.dialogs.map(
        value => <DialogItem name={value.name} id={value.id}/>);

    let MessageDataElements = props.store.getState().dialogsPage.messages.map(
        value => <Message text={value.text}/>);

    let textArea = React.createRef();
    let textAreaBody = props.store.getState().dialogsPage.newMessageBody;

    function changeMessage() {
        let body = textArea.current.value;
        props.store.dispatch(updateNewMessageActionCreator(body))
    }

    function ctreateNewMessage() {
        props.store.dispatch(createNewMessageActionCreator())
    }

    return (
        <div className={css.dialogsContainer}>
            <div>
                <div>
                    <div>
                        <textarea ref={textArea} onChange={changeMessage}
                                  value={textAreaBody}
                                  placeholder="Enter a message"/>
                    </div>
                    <div>
                        <button onClick={ctreateNewMessage}>Новый пост</button>
                    </div>
                </div>
                <div className={css.dialogs}>
                    {DialogsDataElements}
                </div>
            </div>
            <div className={css.messages}>
                {MessageDataElements}
            </div>
        </div>
    )
}

