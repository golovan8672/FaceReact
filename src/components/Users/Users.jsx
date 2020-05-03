import React from 'react'
import style from './users.module.scss'
import userIcon from './../../assets/user.png'
import { NavLink } from 'react-router-dom'


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
                                ? <button disabled = {props.followingInProgress.some(id => id === user.id)} className={style.btn} onClick={() => {
                                   props.unfollow(user.id)
                                }
                                }>UNFOLLOW</button>
                                : <button disabled = {props.followingInProgress.some(id => id === user.id)} className={style.btn} onClick={() => {
                                    props.follow(user.id)
                                }
                                }>FOLLOW</button>
                            }
                        </div>
                        <div className={style.desc}>
                            <div className={style.info}>
                                <div className={style.fullname}>{user.name}</div>
                                <div className={style.status}>{user.status != null ? user.status : "I'm new user"}</div>
                            </div>                 
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
  
}





export default Users