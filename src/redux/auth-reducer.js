const SET_AUTH_DATA = "SET_AUTH_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
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
            debugger
            return {
                ...state,
                ...action.data,
                isAuth: (state.login === null) ? false : true
            }
       
               
        default:
            return state;

    }
}

export const setAuthData = (userId,login,email) => ({type: SET_AUTH_DATA, data: {userId,login,email} })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })

export default authReducer