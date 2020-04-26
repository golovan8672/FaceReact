import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import axios from 'axios';
import {setAuthData} from '../../redux/auth-reducer'

export class HeaderContainer extends React.Component {
    
    componentDidMount(){
        axios
            .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
                withCredentials: true
            })
            .then(response => {
                debugger
                let {id,login,email} = response.data.data;
                this.props.setAuthData(id,login,email)
            })
    }
    
    render() {
        return (
            <Header {...this.props} />
        )
    }

}

const mapStateToProps = state => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { setAuthData })(HeaderContainer);