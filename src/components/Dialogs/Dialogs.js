import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import css from "./dialogs.module.css";

export function Dialogs(props) {
    let state = props;

    let DialogsDataElements = state.dialogsPage.dialogs.map(
        value => <DialogItem name={value.name} id={value.id}/>);

    let MessageDataElements = state.dialogsPage.messages.map(
        value => <Message text={value.message}/>);

    let textArea = React.createRef();
    let textAreaBody = state.newMessageBody;

    function changeMessage() {
        let body = textArea.current.value;
        state.changeMessage(body);
    }

    function onCreateNewMessage() {
        state.ctreateNewMessage();
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
                        <button onClick={onCreateNewMessage}>Новый пост</button>
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

