import React from 'react';

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

 const DialogsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        let newMessage = {
            id: 6,
            text: body
        };
        state.messages.push(newMessage);
        state.newMessageBody = "";
    }
    return state;
};
export default DialogsReducer();
