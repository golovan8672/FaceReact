import React from 'react'
import Users from './Users'
import * as axios from 'axios'
import {follow,unfollow,setUsers,setTotalCount,setNumberPage} from '../../redux/users-Reducer'
import {connect} from 'react-redux'

export class UsersAPIContainer extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }
    onPageNumber = (pageNumber) => {
        this.props.setNumberPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }
    render() {
        return (
        <div>
             <Users
            totalCount = {this.props.totalCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            onPageNumber = {this.onPageNumber}
            />
        </div>
        )
    }   
}

const mapStateToProps = state => {
    return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage
    }
}

export default connect (mapStateToProps, {setUsers,unfollow,follow,setTotalCount,setNumberPage})(UsersAPIContainer)