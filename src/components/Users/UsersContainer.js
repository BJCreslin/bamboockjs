import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followActionCreator,
    setTotalCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../Redux/users-reducer";

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
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
