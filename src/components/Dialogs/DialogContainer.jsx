import { addMessageActionCreator,updateNewMessageActionCreator } from '../../redux/dialog-Reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import withAuthHOC from '../withAuthHOC/withAuthHOC'
import { compose } from 'redux'

let mapStateToProps = (state) => {
   return {
       dialogsPage: state.dialogsPage,
   }
}

let mapDispatchToProps =(dispatch) => {
    return {
        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
        addNewMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export default compose(
    withAuthHOC,
    connect(mapStateToProps,mapDispatchToProps)
)(Dialogs)

