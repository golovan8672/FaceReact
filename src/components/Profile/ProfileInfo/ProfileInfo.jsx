import React from 'react';
import Preloader from '../../commons/preloader';
import style from './profileInfo.module.scss'

const ProfileInfo = (props) => {
    debugger
    if (!props.userProfile) {
        return (
            <Preloader />
        )

    }
    return (
        <div>
            <div className={style.container}>
                <img className={style.img} src={props.userProfile.photos.large} />
                <div className={style.info}>
                    <div className={style.firstName}>{props.userProfile.fullName}</div>
                    <div className={style.aboutMe}>{props.userProfile.aboutMe}</div>
                    <div className={style.contacts}>
                        <div className={style.title}>Contacts:</div>
                        <ul>
                            <li className={style.social}><span>Facebook:</span> {(!props.userProfile.contacts.facebook) ? "-" : props.userProfile.contacts.facebook}</li>
                            <li className={style.social}><span>Website:</span> {(!props.userProfile.contacts.website) ? "-" : props.userProfile.contacts.website}</li>
                            <li className={style.social}><span>VK:</span> {(!props.userProfile.contacts.vk) ? "-" : props.userProfile.contacts.vk}</li>
                            <li className={style.social}><span>Twitter:</span> {(!props.userProfile.contacts.twitter) ? "-" : props.userProfile.contacts.twitter}</li>
                            <li className={style.social}><span>Instagram:</span> {(!props.userProfile.contacts.instagram) ? "-" : props.userProfile.contacts.instagram}</li>
                            <li className={style.social}><span>Youtube:</span> {(!props.userProfile.contacts.youtube) ? "-" : props.userProfile.contacts.youtube}</li>
                            <li className={style.social}><span>Github:</span> {(!props.userProfile.contacts.github) ? "-" : props.userProfile.contacts.github}</li>
                        </ul>
                    </div>
                    <div className={style.job}> About job:
                        <div>Работа: <span className={style.haveJob}>{(props.userProfile.lookingForAJob === true) ? "Есть" : "Нет"}</span></div>
                        <div className={style.jobDesc}>{props.userProfile.lookingForAJobDescription}</div>
                    </div>
                </div>


            </div>
        </div>

    )
}
export default ProfileInfo