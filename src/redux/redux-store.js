import { combineReducers,createStore } from "redux";
import profileReducer from "./profile-Reducer";
import dialogReducer from "./dialog-Reducer";
import sidebarReducer from "./sidebar-Reducer";
import usersReducer from "./users-Reducer";


let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})


let store = createStore(redusers);


export default store