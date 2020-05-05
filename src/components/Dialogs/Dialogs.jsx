import React from 'react'
import stl from './dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import { Redirect } from 'react-router-dom';
import DialogReduxForm from './DialogTextAreaForm'


const Dialogs = (props) => {
    if (!props.isAuth) return <Redirect to="/login" />
    let onSubmit = (formData) => {
            props.addNewMessage(formData.enteredText)
            formData.enteredText = ""  
    }

    let dialogElements = props.dialogsPage.dialogs.map(person => <DialogItem name={person.name} id={person.id} />);
    let messageElements = props.dialogsPage.messages.map(word => <MessageItem message={word.message} />)

    return (
        <div className={stl.dialogs__row}>
            <div className={stl.dialogs}>
                {dialogElements}
            </div>
            <div className={stl.messages__row}>
                <div className={stl.messages}>
                    {messageElements}
                </div>
                <DialogReduxForm onSubmit = {onSubmit}/>
            </div>

        </div>

    )
}
export default Dialogs