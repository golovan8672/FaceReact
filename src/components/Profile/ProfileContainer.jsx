import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { getProfile, setNewLike, addNewPost, updateNewText,getProfileStatus,updateProfileStatus } from '../../redux/profile-Reducer'
import { withRouter } from 'react-router-dom';
import withAuthHOC from '../withAuthHOC/withAuthHOC';
import { compose } from 'redux';
export class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 7095;
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }
    
    render() {
        
        return (
            <Profile {...this.props} />
        )
    }

} 

const mapStateToProps = state => ({
    userProfile: state.profilePage.userProfile,
    posts: state.profilePage.posts,
    profileStatus: state.profilePage.profileStatus
    
})
export default compose(
    withRouter,
    withAuthHOC,
    connect(mapStateToProps, { getProfile,getProfileStatus, updateProfileStatus, setNewLike, addNewPost })
)(ProfileContainer)

