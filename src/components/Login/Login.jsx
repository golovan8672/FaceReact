import React from "react";
import style from './login.module.scss'
import { Field, reduxForm } from "redux-form";
import  required, { maxLength, minLength } from "../../utils/validates";
import { Input } from "../commons/FormControls/FormControls";
import { connect } from "react-redux";
import {setLogin} from '../../redux/auth-reducer'
import { Redirect } from "react-router-dom";


const maxLength30 = maxLength(30)
const minLength8 = minLength(8)

export const LoginForm = (props) => {
   
    return (
        <form className = {style.form} onSubmit = {props.handleSubmit}>
            <div>
                <Field  placeholder="email" name = "email" component = {Input} validate = {[required,maxLength30]}/>
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

const Login = (props) => {
    const onSubmit = (value) => {
        props.setLogin(value.email,value.password,value.rememberMe)
    }
    if (props.isAuth === true) return <Redirect to = {'/profile'}></Redirect> 
    return (
        <div className = {style.loginForm }>
            <h1 className = {style.title}>SIGH IN</h1>
            <LoginReduxForm onSubmit = {onSubmit} />
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth
    }
}

export default connect(mapStateToProps,{setLogin})(Login)