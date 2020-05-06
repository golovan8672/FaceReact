import { addMessageActionCreator } from '../../redux/dialog-Reducer'
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
        addNewMessage: (enteredText) => {
            dispatch(addMessageActionCreator(enteredText))
        }
    }
}

export default compose(
    withAuthHOC,
    connect(mapStateToProps,mapDispatchToProps)
)(Dialogs)

