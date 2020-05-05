import React from 'react'
import style from '../profileInfo.module.scss'
import { updateProfileStatus } from '../../../../redux/profile-Reducer'
import { connect } from 'react-redux'


class UserStatus extends React.Component {

    state = {
        isEdit: false,
        profileStatus: this.props.profileStatus 
    }
    updateText = (e) => {
        this.setState({profileStatus: e.currentTarget.value})
    }
    activeEditMode = () =>  {
        this.setState ({
            isEdit: true
        }) 
    }
    deactiveEditMode = () => {
        this.setState ({
            isEdit: false
        })
        this.props.updateProfileStatus(this.state.profileStatus)
    }
    componentDidUpdate(prevProps){
        if(prevProps.profileStatus !== this.props.profileStatus ){
            this.setState({
                profileStatus: this.props.profileStatus
            })
        }
    }
    
    render(){
        return (
            <div>
                {(!this.state.isEdit)
                 ?  <button onDoubleClick = {this.activeEditMode} className={style.aboutMe}>{this.props.profileStatus || "none"}</button>

                 :  <input onChange = {this.updateText} autoFocus = {true} onBlur = {this.deactiveEditMode} className={style.aboutMe} value = {this.state.profileStatus}></input>

                }
               
            </div>
        )
    }
    
}

export default UserStatus