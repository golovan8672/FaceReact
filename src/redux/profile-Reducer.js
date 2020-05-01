import API from '../API/api'

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const LIKE = "LIKE"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initial = {
    updatedText: "",
    posts:
        [
            { text: "Hi, how are u", likeCount: 10, id: 1 },
            { text: "I,am fine", likeCount: 0, id: 2 },
            { text: "Come here", likeCount: 7, id: 3 }
        ],
    userProfile: null
}
const profileReducer = (state = initial, action) => {

    switch (action.type) {
        case "ADD-POST":
            debugger
            if (state.updatedText !== "" && state.updatedText !== undefined && state.updatedText.length >= 5) {
                let addPost = {
                    text: state.updatedText,
                    likeCount: 0,
                    id: `f${(+new Date).toString(16)}`
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
        case "SET_USER_PROFILE":
            return{
                ...state,
                userProfile: action.profile
            }
        default:
            return state;
    }

}
export const updateNewText = (text) => ({ type: UPDATE_NEW_POST, newText: text });
export const addNewPost = () => ({ type: ADD_POST })
export const setNewLike = (postId) => ({ type: LIKE, postId })
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE,profile})

export const getProfile = userId => dispatch => {
        API.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
export default profileReducer