import React from 'react';
import s from './profile.module.css';
import Preloader from "../../Preloader";
import findJob from "../../../assets/img/findjob.png";
import dontfindJob from "../../../assets/img/dontfindjob.png";
import ReactTooltip from "react-tooltip";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fad009cdnb.archdaily.net%2Fwp-content%2Fuploads%2F2013%2F08%2F51fc8acbe8e44e82ac0000c1_tretyakov-gallery-competition-entry-paper-totement_01-528x221.jpg&f=1&nofb=1'/>
            </div>
            <div>Статус: {props.profile.aboutMe}</div>
            <div>Имя: {props.profile.fullName}</div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
            <div>Имя: {props.profile.fullName}</div>
            <img src={props.profile.lookingForAJob ? findJob : dontfindJob}
                 data-tip={props.profile.lookingForAJob ? "Ищу работу" : "Не ищу работу"}/>
                 <ReactTooltip/>
        </div>
    )
};

export default ProfileInfo;
