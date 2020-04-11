import React from 'react'
import stl from './dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import { addMessageActionCreator,updateNewMessageActionCreator } from '../../redux/dialogs-Reducer'





const Dialogs = (props) => {
    let getText = React.createRef();

    let updateMessage = () => {
        let text = getText.current.value
        props.dispatch(updateNewMessageActionCreator(text))
    }

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    debugger
    let dialogElements = props.state.dialogs.map(person => <DialogItem name={person.name} id={person.id} />);
    let messageElements = props.state.messages.map(word => <MessageItem message={word.message} />)
    return (
        <div className={stl.dialogs__row}>
            <div className={stl.dialogs}>
                {dialogElements}
            </div>
            <div className={stl.messages__row}>
                <div className={stl.messages}>
                    {messageElements}
                </div>
                <textarea ref = {getText} onChange = {updateMessage} value = {props.state.updatedMessage}></textarea>
                <div className={stl.btn}><button onClick = {addMessage}>Send</button></div>
            </div>

        </div>

    )
}
export default Dialogs