import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { setUserProfile, setNewLike, addNewPost, updateNewText } from '../../redux/profile-Reducer'
import * as axios from 'axios'
import { withRouter } from 'react-router-dom';



export class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 2;
        }
        axios
            .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
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
