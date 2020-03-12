const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";

const initialState = {
    users: [],
    totalCount: 0,
    numberForPage: 10,
    currentPage:25
};

let usersReducer = (state = initialState, action) => {
        switch (action.type) {
            case FOLLOW: {
                return {
                    ...state,
                    users: state.users.map(user => {
                        if (user.id === action.userId) {
                            return {...user, followed: true};
                        }
                        return user;
                    })
                }
            }
            case UNFOLLOW: {
                return {
                    ...state,
                    users: state.users.map(user => {
                        if (user.id === action.userId) {
                            return {...user, followed: false};
                        }
                        return user;
                    })
                }
            }
            case SET_USERS: {
                return {
                    ...state,
                    users: action.users
                }
            }
            case SET_TOTAL_COUNT: {
                return {
                    ...state,
                    totalCount: action.totalCount
                }
            }
            case SET_CURRENT_PAGE:{
                return {
                    ...state,
                    currentPage:action.currentPage
                }
            }
            default: {
                return state;
            }
        }
    }
;

export const followActionCreator = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users: users});
export const setTotalCountActionCreator = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount});
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE,currentPage:currentPage});

export default usersReducer;
