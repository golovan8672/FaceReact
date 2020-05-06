import React from 'react'
import stl from './mypost.module.scss'
import { Field, reduxForm } from 'redux-form';

const ProfileTextArea = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <Field placeholder = "Введите текст..." name = "enteredText" component = "textarea" />
            <div className={stl.btn}><button className={stl.btn_send}>Send</button></div>
        </form>
    )
}

const ProfileTextAreaReduxForm = reduxForm({
form: 'posts'
})(ProfileTextArea)

export default ProfileTextAreaReduxForm 