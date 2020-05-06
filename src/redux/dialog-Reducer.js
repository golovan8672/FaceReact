const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE"

let initial = {
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
            if (action.enteredText !== "" && action.enteredText !== undefined ){
                debugger
                let addMessage = {
                    message: action.enteredText,
                    id: `f${(+new Date).toString(16)}`
                }
                return {
                    ...state,
                    messages: [ ...state.messages,addMessage],
                    
                }   
            } else {
                alert("Введите текст!")
            }
            
        default:
            return state;

    }
}
export const addMessageActionCreator = (enteredText) => ({ type: ADD_MESSAGE, enteredText })

export default dialogReducer