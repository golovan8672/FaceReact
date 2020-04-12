import React from 'react'
import { addMessageActionCreator,updateNewMessageActionCreator } from '../../redux/dialogs-Reducer'
import Dialogs from './Dialogs'


const DialogContainer = (props) => {
    
    const updateNewMessage = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text))
    } 
    
    const addNewMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    return <Dialogs 
    addNewMessage = {addNewMessage}
    updateNewMessage = {updateNewMessage} 
    updatedMessage = {props.store.getState().dialogsPage.updatedMessage}
    dialogs = {props.store.getState().dialogsPage.dialogs}
    messages = {props.store.getState().dialogsPage.messages}
    />
}
export default DialogContainer