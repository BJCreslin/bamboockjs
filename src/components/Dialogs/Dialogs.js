import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import css from "./dialogs.module.css";
import {createNewMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/store";


export function Dialogs(props) {
    let state = props.store.getState().dialogsPage;

    let DialogsDataElements = state.dialogs.map(
        value => <DialogItem name={value.name} id={value.id}/>);

    let MessageDataElements = state.messages.map(
        value => <Message text={value.message}/>);

    let textArea = React.createRef();
    let textAreaBody = state.newMessageBody;

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

