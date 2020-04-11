const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE"

let initial = {
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
}
const dialogReducer = (state = initial,action) => {
    switch(action.type){
        case "ADD-MESSAGE":
            let addMessage = {
                id: 6,
                message:state.updatedMessage,
            }
            state.messages.push(addMessage);
            state.updatedMessage = '';
            return state;
        case "UPDATE-NEW-MESSAGE":
            state.updatedMessage = action.newText;
            return state;
        default:
            return state;

    }
}
export const updateNewMessageActionCreator = (text) => ({type:UPDATE_NEW_MESSAGE, newText: text});
export const addMessageActionCreator = () => ({type:ADD_MESSAGE})

export default dialogReducer