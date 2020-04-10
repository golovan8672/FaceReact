const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const ADD_POST = "ADD-POST"
const ADD_MESSAGE = "ADD-MESSAGE"
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
        if (action.type === "ADD-POST") {
            let addPost = {
                id: 4,
                text: this._state.profilePage.updatedText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(addPost);
            this._state.profilePage.updatedText = '';
            this._rerenderTree();

        } else if (action.type === "ADD-MESSAGE"){
            let addMessage = {
                id: 6,
                message:this._state.dialogsPage.updatedMessage,
            }
            this._state.dialogsPage.messages.push(addMessage);
            this._state.dialogsPage.updatedMessage = '';
            this._rerenderTree();

        } else if (action.type === "UPDATE-NEW-POST") {
            this._state.profilePage.updatedText = action.newText;
            this._rerenderTree();

        } else if (action.type === "UPDATE-NEW-MESSAGE") {
            this._state.dialogsPage.updatedMessage = action.newText;
            this._rerenderTree();
        }
        debugger
    },

    subscriber(observer) {
        this._rerenderTree = observer;
        this._rerenderTree();
    }
}
export const updateNewTextActionCreator = (text) => ({type:UPDATE_NEW_POST, newText: text});
export const updateNewMessageActionCreator = (text) => ({type:UPDATE_NEW_MESSAGE, newText: text});
export const addPostActionCreator = () => ({type:ADD_POST})
export const addMessageActionCreator = () => ({type:ADD_MESSAGE})

export default store;