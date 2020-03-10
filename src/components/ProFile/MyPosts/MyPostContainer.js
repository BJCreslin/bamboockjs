import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export function MyPostContainer(props) {
    debugger
    let state = props.store.getState();

    const addPostByClick = () => {
        props.store.dispatch(addPostActionCreator());
    };

    function onChangePost(text) {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} onChangePost={onChangePost}
                 addPostByClick={addPostByClick}/>

    )
}

