import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { setUserProfile, setNewLike, addNewPost, updateNewText } from '../../redux/profile-Reducer'
import { withRouter } from 'react-router-dom';
import API from '../../API/api';





export class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 2;
        }
        API.getProfile(userId)
            .then(data => {
                debugger
                this.props.setUserProfile(data);
            })

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



export default withRouter(connect(mapStateToProps, { setUserProfile, setNewLike, addNewPost, updateNewText })(ProfileContainer));
