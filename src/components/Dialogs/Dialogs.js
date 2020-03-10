import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import css from "./dialogs.module.css";

export function Dialogs(props) {
    debugger

    let DialogsDataElements = props.dialogsPage.dialogs.map(
        value => <DialogItem name={value.name} id={value.id}/>);

    let MessageDataElements = props.dialogsPage.messages.map(
        value => <Message text={value.message}/>);

    let textArea = React.createRef();
    let textAreaBody = props.dialogsPage.newMessageBody;

    function changeMessage() {
        let body = textArea.current.value;
        props.changeMessage(body);
    }

    function onCreateNewMessage() {
        props.createNewMessage();
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

