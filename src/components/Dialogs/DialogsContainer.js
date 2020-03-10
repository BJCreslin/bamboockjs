import React from 'react';
import {createNewMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/store";
import {Dialogs} from "./Dialogs";


export function DialogsContainer(props) {
    let state = props.store.getState().dialogsPage;

    function changeMessage(text) {
        props.store.dispatch(updateNewMessageActionCreator(text))
    }

    function ctreateNewMessage() {
        props.store.dispatch(createNewMessageActionCreator())
    }

    return (<Dialogs dialogsPage={state} newMessageBody={state.newMessageBody} changeMessage={changeMessage}
                     ctreateNewMessage={ctreateNewMessage}/>

    )
}

