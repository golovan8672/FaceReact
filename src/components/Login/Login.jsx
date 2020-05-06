import React from "react";
import style from './login.module.scss'
import { Field, reduxForm } from "redux-form";
import  required, { maxLength, minLength } from "../../utils/validates";
import { Input } from "../commons/FormControls/FormControls";

const maxLength20 = maxLength(20)
const minLength8 = minLength(8)

export const LoginForm = (props) => {
    debugger
   
    return (
        <form className = {style.form} onSubmit = {props.handleSubmit}>
            <div>
                <Field  placeholder="login" name = "login" component = {Input} validate = {[required,maxLength20]}/>
            </div>
            <div>
                <Field placeholder="password" type = "password" name = "password" component = {Input} validate = {[required,minLength8]} />
            </div>
            <div>
                <Field type = "checkbox" name = "rememberMe" component = {Input} /> Remember Me
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className = {style.loginForm }>
            <h1 className = {style.title}>SIGH IN</h1>
            <LoginReduxForm onSubmit = {onSubmit} />
        </div>
    )

}

export default Login