import React from 'react'
import style from '../profileInfo.module.scss'


class UserStatus extends React.Component {
    
    state = {
        isEdit: false
    }

    activeEditMode = () =>  {
        debugger
        this.setState ({
            isEdit: true
        })
    }
    deactiveEditMode = () => {
        this.setState ({
            isEdit: false
        })
    }
    render(){
        return (
            <div>
                {(!this.state.isEdit)
                 ?  <button onDoubleClick = {this.activeEditMode} className={style.aboutMe}>{this.props.userProfile.aboutMe}</button>

                 :  <input onBlur = {this.deactiveEditMode} className={style.aboutMe} value = {this.props.userProfile.aboutMe}></input>

                }
               
            </div>
        )
    }
    
}

export default UserStatus