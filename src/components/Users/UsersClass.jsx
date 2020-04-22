import React from 'react'
import style from './users.module.scss'
import * as axios from 'axios'
import userIcon from './../../img/user.png'

class UsersClass extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
       
    }
   
    onPageNumber = (pageNumber) => {
        this.props.setNumberPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                
              
               
            })
 
    }
    

    render() {
        let  numberOfPages = Math.ceil(this.props.totalCount / this.props.pageSize)

        let pages = [];

        for (let i = 1; i <= numberOfPages; i++) {
            pages.push(i);
        }
        
        return (

            <div className={style.row}>
                {
                pages.map(p => 
                    <span className={(p === this.props.currentPage) && style.selected}
                    onClick = {() => (this.onPageNumber(p))}>{p}</span>
                    )
                }

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
export default UsersClass