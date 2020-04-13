import { addPostActionCreator,updateNewTextActionCreator } from '../../../redux/profile-Reducer';
import MyPost from './MyPost'
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return  {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewText: (text) => {
            dispatch(updateNewTextActionCreator(text))
        },
        addNewText: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost) //local subscribe tree


export default MyPostContainer;