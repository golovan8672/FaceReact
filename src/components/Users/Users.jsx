import React from 'react'
import style from './users.module.scss'
import * as axios from 'axios'
import userIcon from './../../img/user.png'

class Users extends React.Component {

    componentDidMount (){
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }
    render() {
        return (
            <div className={style.row}>
                {
                    this.props.users.map(user => <div key={user.id}>
                        <div className={style.user__item}>
                            <div className={style.avatar}>
                                <img src={user.photos.small != null ? user.photos.small : userIcon} className={style.photoUrl} />
                                {user.followed
                                    ? <button className={style.btn} onClick={() => { this.props.unfollow(user.id) }}>UNFOLLOW</button>
                                    : <button className={style.btn} onClick={() => { this.props.follow(user.id) }}>FOLLOW</button>
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
      



}
export default Users