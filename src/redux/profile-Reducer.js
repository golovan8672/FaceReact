import API from '../API/api'

const ADD_POST = "ADD-POST"
const LIKE = "LIKE"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS"

let initial = {
    posts:
        [
            { text: "Hi, how are u", likeCount: 10, id: 1 },
            { text: "I,am fine", likeCount: 0, id: 2 },
            { text: "Come here", likeCount: 7, id: 3 }
        ],
    userProfile: null,
    profileStatus: ""
}
const profileReducer = (state = initial, action) => {

    switch (action.type) {
        case "ADD-POST":
            debugger
            if (action.enteredText !== "" && action.enteredText !== undefined && action.enteredText.length >= 5) {
                let addPost = {
                    text: action.enteredText,
                    likeCount: 0,
                    id: `f${(+new Date).toString(16)}`
                }
                return {
                    ...state,
                    posts: [...state.posts, addPost],
                }
            }
            else {
                alert("Вы ввели менее 5 символов!")
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
            case "SET_PROFILE_STATUS":
                return{
                    ...state,
                    profileStatus: action.profileStatus
                }
        default:
            return state;
    }

}
export const addNewPost = (enteredText) => ({ type: ADD_POST, enteredText })
export const setNewLike = (postId) => ({ type: LIKE, postId })
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE,profile})
export const setProfileStatus = (profileStatus) => ({type:SET_PROFILE_STATUS,profileStatus})

export const getProfile = userId => dispatch => {
        API.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getProfileStatus = userId => dispatch => {
    API.getProfileStatus(userId)
    .then(response => {
        dispatch(setProfileStatus(response.data))
    })
}
export const updateProfileStatus = status => dispatch => {
    API.updateProfileStatus(status)
    .then(() => {
        dispatch(setProfileStatus(status))
    })
}
export default profileReducer