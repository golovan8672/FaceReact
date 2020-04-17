import { addPostActionCreator,updateNewTextActionCreator,likeAC } from '../../../redux/profile-Reducer';
import MyPost from './MyPost'
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return  {
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewText: (text) => {
            dispatch(updateNewTextActionCreator(text))
        },
        addNewText: () => {
            dispatch(addPostActionCreator())
        },
        newLike: (postId) => {
            dispatch(likeAC(postId))
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost) //local subscribe tree


export default MyPostContainer;