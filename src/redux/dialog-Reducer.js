const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE"

let initial = {
    updatedMessage: "",
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
const dialogReducer = (state = initial, action) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            debugger
            if (state.updatedMessage !== "" && state.updatedMessage !== undefined ){
                debugger
                let addMessage = {
                    message: state.updatedMessage,
                    id: `f${(+new Date).toString(16)}`
                }
                return {
                    ...state,
                    messages: [ ...state.messages,addMessage],
                    updatedMessage: ""
                }
            } else {
                alert("Введите текст!")
            }
            
        case "UPDATE-NEW-MESSAGE":
            return {
                ...state,
                updatedMessage: action.newText
            }
        default:
            return state;

    }
}
export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newText: text });
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export default dialogReducer