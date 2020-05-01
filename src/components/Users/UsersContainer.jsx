import React from 'react'
import Users from './Users'
import Preloader from '../commons/preloader/Preloader'
import { follow, unfollow, getUsers } from '../../redux/users-Reducer'
import { connect } from 'react-redux'


export class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize,this.props.currentPage)
    }
    onPageNumber = (pageNumber) => {
        this.props.getUsers(this.props.pageSize,pageNumber)
    }
    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    {...this.props}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}


export default connect(mapStateToProps, { unfollow, follow ,getUsers })(UsersAPIContainer)