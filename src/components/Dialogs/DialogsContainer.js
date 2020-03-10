import React from 'react';
import {createNewMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        createNewMessage: () => {
            dispatch(createNewMessageActionCreator())
        },
        changeMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;


