import API from '../API/api'

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_NUMBER_PAGE = "SET_NUMBER_PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"
let initial = {
    users: [],
    pageSize: 50,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
            debugger
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
            debugger
            return {
                ...state,
                currentPage: action.page
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE_FOLLOWING_IN_PROGRESS":
            return {
                ...state,
                followingInProgress: action.inProgress ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state;

    }
}
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const setNumberPage = (page) => ({ type: SET_NUMBER_PAGE, page })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingIsProgress = (inProgress, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, inProgress, userId })

export const getUsers = (pageSize, currentPage) => dispatch => {
        dispatch(setNumberPage(currentPage))
        dispatch(toggleIsFetching(true))
        debugger
        API.getUsers(pageSize, currentPage)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))
            })

    }
export const unfollow = userId => dispatch => {
        dispatch(toggleFollowingIsProgress(true, userId))
        API.setUnfollow(userId)
            .then(response => {
                dispatch(toggleFollowingIsProgress(false, userId))
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                    debugger
                }
            })
    }
export const follow = userId => dispatch => {
        dispatch(toggleFollowingIsProgress(true, userId))
        API.setFollow(userId)
            .then(response => {
                dispatch(toggleFollowingIsProgress(false, userId))
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))

                }

            })
    }

export default usersReducer