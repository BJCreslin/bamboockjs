import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onChangePost: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPostByClick: () => {
            dispatch(addPostActionCreator())
        }

    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;

