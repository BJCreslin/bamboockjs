import React from 'react';
import * as axios from "axios";

import Users from "./Users";

class UsersApi extends React.Component {

    componentDidMount = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    };

    onCurrentPageChange = (newCurrentPage) => {
        this.props.setCurrentPage(newCurrentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page= ${newCurrentPage}&count=${this.props.numberForPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })


    };

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.numberForPage);
        let pagesPagination = [];
        let cycleBegin = this.props.currentPage - 10;
        if (cycleBegin <= 0) cycleBegin = 1;
        let cycleEnd = cycleBegin + 20;
        if (cycleEnd > pagesCount) cycleEnd = pagesCount;
        for (let i = cycleBegin; i < cycleEnd; i++) {
            pagesPagination.push(i);
        }


        return <Users currentPage={this.props.currentPage} pagesPagination={pagesPagination} users={this.props.users}
                      totalCount={this.props.totalCount} numberForPage={this.props.numberForPage}
                      onCurrentPageChange={this.onCurrentPageChange} follow={this.props.follow}
                      unFollow={this.props.unFollow}/>
    }
}

export default UsersApi;
