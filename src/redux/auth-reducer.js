const SET_AUTH_DATA = "SET_AUTH_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_AUTH = "TOGGLE_IS_AUTH"

let initial = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
}
const authReducer = (state = initial, action) => {
    switch (action.type) {
        case "SET_AUTH_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case "TOGGLE_IS_AUTH":
            return {
                ...state,
                isAuth: action.isAuth
            }

        default:
            return state;

    }
}

export const setAuthData = (id, login, email) => ({ type: SET_AUTH_DATA, data: { id, login, email } })
export const toggleIsAuth = (isAuth) => ({ type: TOGGLE_IS_AUTH, isAuth })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default authReducer