import React from 'react'
import Users from './Users'
import Preloader from '../commons/preloader/Preloader'
import { follow, unfollow, setUsers, setTotalCount, setNumberPage, toggleIsFetching } from '../../redux/users-Reducer'
import { connect } from 'react-redux'
import getUsers from '../../API/api'


export class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        getUsers(this.props.pageSize, this.props.currentPage)
            .then(response => {
                debugger
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
            })

    }
    onPageNumber = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setNumberPage(pageNumber);

        getUsers(this.props.pageSize, pageNumber)
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