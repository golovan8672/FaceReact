import { addMessageActionCreator,updateNewMessageActionCreator } from '../../redux/dialogs-Reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

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
const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)


export default DialogContainer