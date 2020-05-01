import React from 'react'
import stl from './dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import {Redirect}  from 'react-router-dom';





const Dialogs = (props) => {
    debugger    
    if (!props.isAuth) return <Redirect to = "/login"/>
    let getText = React.createRef();
    
    let dialogElements = props.dialogsPage.dialogs.map(person => <DialogItem name={person.name} id={person.id} />);
    let messageElements = props.dialogsPage.messages.map(word => <MessageItem message={word.message} />)


    let updateMessage = () => {
        let text = getText.current.value
        props.updateNewMessage(text)
    }

    let addMessage = () => {
        props.addNewMessage()
    }

    return (
        <div className={stl.dialogs__row}>
            <div className={stl.dialogs}>
                {dialogElements}
            </div>
            <div className={stl.messages__row}>
                <div className={stl.messages}>
                    {messageElements}
                </div>
                <textarea ref={getText} onChange={updateMessage} value={props.dialogsPage.updatedMessage}></textarea>
                <div className={stl.btn}><button onClick={addMessage}>Send</button></div>
            </div>

        </div>

    )
}
export default Dialogs