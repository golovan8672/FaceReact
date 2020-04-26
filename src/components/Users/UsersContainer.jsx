import React from 'react'
import Users from './Users'
import Preloader from '../commons/preloader/Preloader'
import * as axios from 'axios'
import { follow, unfollow, setUsers, setTotalCount, setNumberPage, toggleIsFetching } from '../../redux/users-Reducer'
import { connect } from 'react-redux'


export class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {
                withCredentials: true
            })
            .then(response => {
                debugger
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }
    onPageNumber = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setNumberPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false)
            })
    }
    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageNumber={this.onPageNumber}
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
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

export default connect(mapStateToProps, { setUsers, unfollow, follow, setTotalCount, setNumberPage, toggleIsFetching })(UsersAPIContainer)