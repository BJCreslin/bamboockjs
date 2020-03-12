import React from 'react';
import * as axios from "axios";
import css from "./users.module.css";
import photos from "../../assets/img/user.png";

class Users extends React.Component {

    componentDidMount = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    };

    onCurrentPageChange=(newCurrentPage) => {
        this.props.setCurrentPage(newCurrentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page= ${newCurrentPage}&count=${this.props.numberForPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })


        };

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.numberForPage);
        let pages = [];
        let cycleBegin = this.props.currentPage - 10;
        if (cycleBegin <=0) cycleBegin = 1;
        let cycleEnd = cycleBegin + 20;
        if (cycleEnd > pagesCount) cycleEnd = pagesCount;
        for (let i = cycleBegin; i < cycleEnd; i++) {
            pages.push(i);
        }


        return <div className={css.mt}>
            {pages.map(page => {
                    return <span className={(page === this.props.currentPage) && css.activePageNumber}
                                 onClick={()=>{this.onCurrentPageChange(page)}}>{page + " "}</span>
                }
            )}

            {this.props.users.map(user =>
                    <div key={user.id}>
            <span>
                <div>
                    <img className={css.userPhoto} src={user.photos.small != null ? user.photos.small : photos}/>
                </div>
                <div> {
                    user.followed ?
                        <button onClick={() => {
                            this.props.unFollow(user.id)
                        }}> Follow</button> :
                        <button onClick={() => {
                            this.props.follow(user.id)
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
    }
}

export default Users;
