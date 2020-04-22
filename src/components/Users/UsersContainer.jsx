import { connect } from "react-redux";
import UsersClass from "./UsersClass"
import { unfollowAC,followAC,setUserAC, setCurrentPageAC, setTotalCountAC, setPageSizeAC, setNumberPageAC } from "../../redux/users-Reducer";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch( followAC(userId))
        },
        unfollow: (userId) => {
            dispatch( unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
        setNumberPage: (page) => {
            dispatch(setNumberPageAC(page))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersClass) 

export default UsersContainer;