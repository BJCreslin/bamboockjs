const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    users: [
        {
            id: 1,
            photoUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-supermen-1574086730.png?crop=0.454xw:0.907xh;0.0176xw,0&resize=640:*",
            followed: true,
            fullName: "Ivanov",
            status: "i am a boss",
            location: {country: "usa", city: "london"}
        }, {
            id: 2,
            photoUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-supermen-1574086730.png?crop=0.454xw:0.907xh;0.0176xw,0&resize=640:*",
            followed: false,
            fullName: "petrov",
            status: "google",
            location: {country: "Kazakhstan", city: "Asatana"}
        }, {
            id: 3,
            photoUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-supermen-1574086730.png?crop=0.454xw:0.907xh;0.0176xw,0&resize=640:*",
            followed: false,
            fullName: "rtthn",
            status: "google going",
            location: {country: "Kirgyz", city: "fcsaer"}
        }, {
            id: 4,
            photoUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-supermen-1574086730.png?crop=0.454xw:0.907xh;0.0176xw,0&resize=640:*",
            followed: true,
            fullName: "Jonnson H",
            status: "yandex roolitt",
            location: {country: "Afgan", city: "Kabul"}
        }
    ]
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
            default: {
                return state;
            }
        }
    }
;

export const followActionCreator = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users:users});

export default usersReducer;
