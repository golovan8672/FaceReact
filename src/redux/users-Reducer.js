const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_NUMBER_PAGE = "SET_NUMBER_PAGE"
let initial = {
    users: [],
    pageSize: 3,
    totalCount: 0,
    currentPage: 1,


}
const usersReducer = (state = initial, action) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }
        case "SET_USERS":
            return {
                ...state,
                users: [...action.users]
            }
        case "SET_TOTAL_COUNT":
            return {
                ...state,
                totalCount: action.totalCount
            }
        case "SET_NUMBER_PAGE":
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state;

    }
}
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUserAC = (users) => ({ type: SET_USERS, users })
export const setTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const setNumberPageAC = (page) => ({ type: SET_NUMBER_PAGE, page })

export default usersReducer