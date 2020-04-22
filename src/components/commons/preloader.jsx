import React from 'react'
import preloader from "../../assets/preloader.svg"
import style from './scss/preloader.module.scss'


const Preloader = () => {
    return (
        <div className = {style.background}><img src={preloader} className ={style.preloader} /></div>
        
    )
    

}
export default Preloader