import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { getProfile, setNewLike, addNewPost, updateNewText } from '../../redux/profile-Reducer'
import { withRouter } from 'react-router-dom';
import withAuthHOC from '../withAuthHOC/withAuthHOC';
import { compose } from 'redux';
export class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        debugger
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId)
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
    updatedText: state.profilePage.updatedText,
    
})
export default compose(
    withRouter,
    withAuthHOC,
    connect(mapStateToProps, { getProfile, setNewLike, addNewPost, updateNewText })
)(ProfileContainer)

