import React from 'react';
import css from './users.module.css';
import * as axios from "axios";
import photos from '../../assets/img/user.png';

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            })
            // props.users = [
            //     {
            //         id: 1,
            //         photoUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-supermen-1574086730.png?crop=0.454xw:0.907xh;0.0176xw,0&resize=640:*",
            //         followed: true,
            //         fullName: "Ivanov",
            //         status: "i am a boss",
            //         location: {country: "usa", city: "london"}
            //     }, {
            //         id: 2,
            //         photoUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-supermen-1574086730.png?crop=0.454xw:0.907xh;0.0176xw,0&resize=640:*",
            //         followed: false,
            //         fullName: "petrov",
            //         status: "google",
            //         location: {country: "Kazakhstan", city: "Asatana"}
            //     }, {
            //         id: 3,
            //         photoUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-supermen-1574086730.png?crop=0.454xw:0.907xh;0.0176xw,0&resize=640:*",
            //         followed: false,
            //         fullName: "rtthn",
            //         status: "google going",
            //         location: {country: "Kirgyz", city: "fcsaer"}
            //     }, {
            //         id: 4,
            //         photoUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-supermen-1574086730.png?crop=0.454xw:0.907xh;0.0176xw,0&resize=640:*",
            //         followed: true,
            //         fullName: "Jonnson H",
            //         status: "yandex roolitt",
            //         location: {country: "Afgan", city: "Kabul"}
            //     }
            // ];
        }
    };
    return <div className={css.mt}>
        <button onClick={() => (getUsers())}>Get Users</button>
        {props.users.map(user =>
            <div key={user.id}>
            <span>
                <div>
                    <img className={css.userPhoto} src={user.photos.small != null ? user.photos.small : photos}/>
                </div>
                <div> {
                    user.followed ?
                        <button onClick={() => {
                            props.unFollow(user.id)
                        }}> Follow</button> :
                        <button onClick={() => {
                            props.follow(user.id)
                        }}> UnFollow</button>
                }</div>

                    </span>
                <span>
                    <div>
                    {user.name}
                    </div>
                    <div>
                    {user.status}
                    </div>
                    </span>
                <span>
                    <div>
                    {"user.location.city"}
                    </div>
                    <div>
                    {"user.location.country"}
                    </div>
                    </span>
            </div>
        )
        }
    </div>
};

export default Users;
