import React from 'react';
import css from "./users.module.css";
import photos from "../../assets/img/user.png";

let Users = (props) => {

    return (
        <div className={css.mt}>
            {props.pagesPagination.map(page => {
                    return <span className={(page === props.currentPage) && css.activePageNumber}
                                 onClick={() => {
                                     props.onCurrentPageChange(page)
                                 }}>{page + " "}</span>
                }
            )}

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
        </div>)


};
export default Users;
