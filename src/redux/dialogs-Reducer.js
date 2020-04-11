const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE"

const dialogReducer = (state,action) => {
    debugger
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
    debugger
}
export const updateNewMessageActionCreator = (text) => ({type:UPDATE_NEW_MESSAGE, newText: text});
export const addMessageActionCreator = () => ({type:ADD_MESSAGE})

export default dialogReducer