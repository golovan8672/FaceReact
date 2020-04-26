import React from 'react'
import style from './users.module.scss'
import userIcon from './../../assets/user.png'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'


const Users = (props) => {
    let numberOfPages = Math.ceil(props.totalCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
    }

    return (

        <div className={style.row}>

            {
                pages.map(p =>
                    <span className={(p === props.currentPage) && style.selected}
                        onClick={() => (props.onPageNumber(p))}>{p}</span>
                )
            }

            {
                props.users.map(user => <div key={user.id}>
                    <div className={style.user__item}>
                        <div className={style.avatar}>
                            <NavLink to={"/profile/" + user.id} >
                                <img src={user.photos.small != null ? user.photos.small : userIcon} className={style.photoUrl} />
                            </NavLink>
                            {user.followed
                                ? <button className={style.btn} onClick={() => {
                                    axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "751b76dc-1968-431a-845b-d4369ac728f6"
                                                }
                                            })
                                        .then(response => {
                                            debugger
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(user.id);
                                            }

                                        })
                                    props.unfollow(user.id)
                                }
                                }>UNFOLLOW</button>
                                : <button className={style.btn} onClick={() => {
                                    axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "751b76dc-1968-431a-845b-d4369ac728f6"
                                                }

                                            })
                                        .then(response => {
                                            debugger
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id);
                                            }

                                        })
                                }

                                }>FOLLOW</button>
                            }
                        </div>
                        <div className={style.desc}>
                            <div className={style.info}>
                                <div className={style.fullname}>{user.name}</div>
                                <div className={style.status}>{user.status != null ? user.status : "I'm new user"}</div>
                            </div>
                            <div className={style.location}>
                                <div className={style.country}>{/*user.location.country*/}</div>
                                <div className={style.city}>{/*user.location.city*/}</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}





export default Users