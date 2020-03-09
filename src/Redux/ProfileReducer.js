
const ADD_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const ProfileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 6,
            message: state.newPostText,
            likesCount: 0
        };
        state.posts.push(newPost);
        state.newPostText = "";
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.text;
    }
    return state;
};

export default ProfileReducer();
