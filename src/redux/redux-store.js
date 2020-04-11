import { combineReducers,createStore } from "redux";
import profileReducer from "./profile-Reducer";
import dialogReducer from "./dialogs-Reducer";
import sidebarReducer from "./sidebar-Reducer";


let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
})


let store = createStore(redusers);

export default store