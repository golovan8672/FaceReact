import profileReducer from "./profile-Reducer";
import dialogReducer from "./dialogs-Reducer";
import sidebarReducer from "./sidebar-Reducer";

let store = {
    _state: {
        dialogsPage: {
            updatedMessage:"",
            messages:
                [
                    { message: "Hello", id: 1 },
                    { message: "Okey", id: 2 },
                    { message: "Bro", id: 3 },
                    { message: "luv u", id: 4 },
                    { message: "come on", id: 5 }
                ],
            dialogs: [
                { name: "Sergey", id: 1 },
                { name: "Elena", id: 2 },
                { name: "Anton", id: 3 },
                { name: "Andrey", id: 4 },
                { name: "Boris", id: 5 },
                { name: "Sasha", id: 6 },
                { name: "Fedor", id: 7 },
                { name: "Georg", id: 8 }
            ]
        },
        profilePage: {
            updatedText: "",
            posts:
                [
                    { text: "Hi, how are u", likeCount: "10", id: 1 },
                    { text: "I,am fine", likeCount: "2", id: 2 },
                    { text: "Come here", likeCount: "7", id: 3 }
                ]
        },
        sidebar: {
            friends: [
                { name: "Sergey" },
                { name: "Andrey" },
                { name: "Georgy" }
            ],
            links:
                [
                    { nameNav: "Profile", path: '/profile' },
                    { nameNav: "Dialogs", path: '/dialogs' },
                    { nameNav: "Music", path: '/music' },
                    { nameNav: "News", path: '/news' },
                    { nameNav: "Settings", path: '/settings' }
                ]
        }
    },
    // Не влияющие на state функции
    _rerenderTree() {
        return;
    },
    getState() {
        return this._state;
    },

    dispatch(action) { //type:"ADD-POST","UPDATE-NEW-POST","ADD-MESSAGE","UPDATE-NEW-MESSAGE"
    debugger
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);
        this._rerenderTree()
    },
    subscriber(observer) {
        this._rerenderTree = observer;
        this._rerenderTree();
    }
}


export default store;