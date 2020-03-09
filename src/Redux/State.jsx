import React from "react";

const ADD_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello World", likesCount: 12},
                {id: 2, message: "chuma", likesCount: 23},
                {id: 3, message: "you", likesCount: 19},
                {id: 4, message: "fantastic", likesCount: 34}
            ],

            newPostText: "новый пост"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Egor"},
                {id: 3, name: "Zlata"},
                {id: 4, name: "Nastya"},
                {id: 5, name: "Fedor"}
            ],
            messages: [
                {id: 1, text: "hi"},
                {id: 2, text: "hello"},
                {id: 3, text: "you"},
                {id: 4, text: "skidishhh"},
                {id: 5, text: "ssss"},
            ]
        }
    },
    _callSubscriber() {
        console.log("fdfd")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber()
        }
    }
};
export default store;

export const addPostActionCreator = () => {
    return {type: ADD_POST};
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    }
};

window.store = store;
