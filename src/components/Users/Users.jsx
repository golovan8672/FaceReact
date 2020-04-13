import React from 'react'
import style from './users.module.scss'
const Users = (props) => {
    return (

        <div className={style.row}>
            {
                props.users.map(user => <div key={user.id}>
                    <div className={style.user__item}>
                        <div className={style.avatar}>
                            <img src={user.photoUrl} className={style.photoUrl} />
                            {user.followed
                                ? <button className={style.btn} onClick={() => { props.unfollow(user.id) }}>UNFOLLOW</button>
                                : <button className={style.btn} onClick={() => { props.follow(user.id) }}>FOLLOW</button>
                            }
                        </div>
                        <div className={style.desc}>
                            <div className={style.info}>
                                <div className={style.fullname}>{user.fullName}</div>
                                <div className={style.status}>{user.status}</div>
                            </div>
                            <div className={style.location}>
                                <div className={style.country}>{user.location.country}</div>
                                <div className={style.city}>{user.location.city}</div>
                            </div>
                        </div>

                    </div>
                </div>)
            }

        </div>
    )
}
export default Users