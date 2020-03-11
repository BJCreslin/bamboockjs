import React from 'react';
import css from './users.module.css';

const Users = (props) => {
    return <div className={css.mt}>
        {props.users.map(user =>
            <div key={user.id}>
            <span>
                <div>
                    <img className={css.userPhoto} src={user.photoUrl}/>
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
                    {user.fullName}
                    </div>
                    <div>
                    {user.status}
                    </div>
                    </span>
                <span>
                    <div>
                    {user.location.city}
                    </div>
                    <div>
                    {user.location.country}
                    </div>
                    </span>
            </div>
        )
        }
    </div>
};

export default Users;
