import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import axios from 'axios';
import { setAuthData,toggleIsAuth } from '../../redux/auth-reducer'

export class HeaderContainer extends React.Component {

    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    this.props.setAuthData(id, login, email)
                } else {
                    this.props.toggleIsAuth(false)
                }
                debugger
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


export default connect(mapStateToProps, { setAuthData,toggleIsAuth })(HeaderContainer);