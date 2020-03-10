import React from 'react';
import css from './content.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
};

export default Profile;
