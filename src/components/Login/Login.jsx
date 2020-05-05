import React from "react";
import style from './login.module.scss'
import { Field, reduxForm } from "redux-form";


export const LoginForm = (props) => {
    return (
        <form className = {style.form} onSubmit = {props.handleSubmit}>
            <div>
                <Field  placeholder="login" name = "login" component = "input"/>
            </div>
            <div>
                <Field placeholder="password" name = "password" component = "input" />
            </div>
            <div>
                <Field type = "checkbox" name = "rememberMe" component = "input" /> Remember Me
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