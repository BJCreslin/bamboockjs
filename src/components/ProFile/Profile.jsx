import React from 'react';
import css from './content.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {MyPostContainer} from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    debugger
    return (
        <div>
            <ProfileInfo/>
            {/*<MyPosts posts={props.profilePage.posts}*/}
            {/*         newPostText={props.profilePage.newPostText}*/}
            {/*         dispatch={props.dispatch}/>*/}
            <MyPostContainer store={props.store}/>
        </div>
    )
};

export default Profile;
