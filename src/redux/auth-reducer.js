import API from '../API/api'
const SET_AUTH_DATA = "SET_AUTH_DATA";


let initial = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}
const authReducer = (state = initial, action) => {
    switch (action.type) {
        case "SET_AUTH_DATA":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;

    }
}

export const setAuthData = (id, login, email, isAuth) => ({ type: SET_AUTH_DATA, payload: { id, login, email, isAuth } })


export const getAuth = () =>  (dispatch) => {
        API.getAuth()
        .then(response => {
            if (response.data.resultCode === 0) {
                debugger
                let { id, login, email } = response.data.data;
                dispatch(setAuthData(id, login, email,true))
            }
        })
    }
export const setLogin = (email,password,rememberMe) => dispatch => {
    API.login(email,password,rememberMe)
    .then(response => {
        if (response.data.resultCode === 0){
            dispatch(getAuth())
        }
    })
}
export const logout = () => dispatch => {
    API.logout()
    .then(response => {
        if (response.data.resultCode === 0){
            dispatch(setAuthData(null,null,null,false))
        }
    })
}
export default authReducer