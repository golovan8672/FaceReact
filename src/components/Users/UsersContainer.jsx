import { connect } from "react-redux";
import Users from "./Users"
import { unfollowAC,followAC,setUserAC } from "../../redux/users-Reducer";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
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
        }
      
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users) 

export default UsersContainer;