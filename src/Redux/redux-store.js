import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./DialogsReducer";
import SideBarReducer from "./SideBarReducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SideBarReducer
});

let store = createStore(reducers);

export default store;
