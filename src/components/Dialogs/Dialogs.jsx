import React from 'react'
import stl from './dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'




const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(person => <DialogItem name={person.name} id={person.id} />);
    let messageElements = props.messages.map(word => <MessageItem message={word.message} />)
    return (
        <div className={stl.dialogs__row}>
            <div className={stl.dialogs}>
                {dialogElements}
            </div>
            <div className={stl.messages}>
                {messageElements}
            </div>
        </div>

    )
}
export default Dialogs