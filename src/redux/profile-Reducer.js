const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const LIKE = "LIKE"

let initial = {
    updatedText: "",
    posts:
        [
            { text: "Hi, how are u", likeCount: 10, id: 1 },
            { text: "I,am fine", likeCount: 0, id: 2 },
            { text: "Come here", likeCount: 7, id: 3 }
        ]
}
const profileReducer = (state = initial, action) => {

    switch (action.type) {
        case "ADD-POST":
            if (state.updatedText !== "" && state.updatedText !== undefined && state.updatedText.length >= 5) {
                let addPost = {
                    id: 4,
                    text: state.updatedText,
                    likeCount: 0
                }
                return {
                    ...state,
                    posts: [...state.posts, addPost],
                    updatedText: ""
                }
            }
            else {
                alert("Вы ввели менее 5 символов!")
            }

        case "UPDATE-NEW-POST":
            return {
                ...state,
                updatedText: action.newText,
            }
        case "LIKE":
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.postId){
                        post.likeCount += 1
                        return {...post }
                    }
                    return post
                })
            }
        default:
            return state;
    }

}
export const updateNewTextActionCreator = (text) => ({ type: UPDATE_NEW_POST, newText: text });
export const addPostActionCreator = () => ({ type: ADD_POST })
export const likeAC = (postId) => ({ type: LIKE, postId })

export default profileReducer