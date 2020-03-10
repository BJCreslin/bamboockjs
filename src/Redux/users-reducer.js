const CHANGE_FOLLOW_STATUS="CHANGE_FOLLOW_STATUS";

const initialState = {users:[
    {
        id: 1, followed: true, fullName: "Ivanov", status: "i am a boss", location: {country: "usa", city: "london"}
    },
    {
        id: 2,followed:false, fullName: "petrov", status: "google", location: {country: "Kazakhstan", city: "Asatana"}
    }, {
        id: 3, followed:false, fullName: "rtthn", status: "google going", location: {country: "Kirgyz", city: "fcsaer"}
    }, {
        id: 2,followed:true, fullName: "Jonnson H", status: "yandex roolitt", location: {country: "Afgan", city: "Kabul"}
    }
]};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOW_STATUS{
            return {
                ...state,
                users[action.userId]=
            }
        }
        default: {
            return state;
        }
    }
};

export default usersReducer;
