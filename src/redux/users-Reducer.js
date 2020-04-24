const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_NUMBER_PAGE = "SET_NUMBER_PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
let initial = {
    users: [],
    pageSize: 50,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
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
            case "TOGGLE_IS_FETCHING":
                return {
                    ...state,
                    isFetching: action.isFetching
                }
               
        default:
            return state;

    }
}
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const setNumberPage = (page) => ({ type: SET_NUMBER_PAGE, page })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer