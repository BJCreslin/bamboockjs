const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
    users: [],
    totalCount: 0,
    numberForPage: 10,
    currentPage: 1,
    isFetching: true
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
            case SET_CURRENT_PAGE: {
                return {
                    ...state,
                    currentPage: action.currentPage
                }
            }
            case TOGGLE_IS_FETCHING: {
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            }
            default: {
                return state;
            }
        }
    }
;

export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setToggleFetching=(isFetching)=>({type: TOGGLE_IS_FETCHING,isFetching});

export default usersReducer;
