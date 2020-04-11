const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const profileReducer = (state,action) => {
    debugger
    switch(action.type){
        case "ADD-POST":
            let addPost = {
                id: 4,
                text: state.updatedText,
                likeCount: 0
            }
            state.posts.push(addPost);
            state.updatedText = '';
            return state;
        case "UPDATE-NEW-POST":
            state.updatedText = action.newText;
            return state;
        default:
            return state;
    }
    debugger
}
export const updateNewTextActionCreator = (text) => ({type:UPDATE_NEW_POST, newText: text});
export const addPostActionCreator = () => ({type:ADD_POST})

export default profileReducer