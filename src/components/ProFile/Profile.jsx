import React from 'react';
import css from './content.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePages={props.profilePage} dispatch={props.dispatch}/>
        </div>
    )
};

export default Profile;
