import React from 'react'
import style from './formControls.module.scss'


export const Input = ({input,meta,...props}) => {
    return (
        <>
            <input {...input} {...meta} {...props} className = {meta.error && meta.touched && style.error } />
            {meta.error && meta.touched && <span className = {style.errorMessage}>{meta.error}</span>} 
        </>
    )
}