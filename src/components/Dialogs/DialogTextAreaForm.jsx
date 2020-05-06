import React from 'react'
import { Field, reduxForm } from 'redux-form';
import stl from "./dialogs.module.scss";

const DialogTextAreaForm = (props) => {
    return (
        <>
            <form onSubmit = {props.handleSubmit}>
                <Field  placeholder = "Введите текст..." name="enteredText" component = "textarea"></Field>
                <div className={stl.btn}><button>Send</button></div>
            </form>

        </>
    )

}
const DialogReduxForm = reduxForm({
    form: 'dialogs'
})(DialogTextAreaForm)

export default DialogReduxForm
