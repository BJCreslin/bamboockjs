import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setTotalCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {

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


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        numberForPage: state.usersPage.numberForPage,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unFollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountActionCreator(totalCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
