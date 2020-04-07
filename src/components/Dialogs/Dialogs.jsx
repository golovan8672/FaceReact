import React from 'react'
import stl from './dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'



let dialogs = [
    { name: "Sergey", id: 1 },
    { name: "Elena", id: 2 },
    { name: "Anton", id: 3 },
    { name: "Andrey", id: 4 },
    { name: "Boris", id: 5 },
    { name: "Sasha", id: 6 },
    { name: "Fedor", id: 7 },
    { name: "Georg", id: 8 }
]
let messages = [
    { message: "Hello", id: 1 },
    { message: "Okey", id: 2 },
    { message: "Bro", id: 3 },
    { message: "luv u", id: 4 },
    { message: "come on", id: 5 },
]

const Dialogs = () => {
    let dialogElements = dialogs.map(person => <DialogItem name={person.name} id={person.id} />)
    let messageElements = messages.map(word => <MessageItem message={word.message} />)
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