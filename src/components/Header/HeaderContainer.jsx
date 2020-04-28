import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthData, toggleIsAuth } from '../../redux/auth-reducer'
import API from '../../API/api';

export class HeaderContainer extends React.Component {

    componentDidMount() {
        API.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, login, email } = data.data;
                    this.props.setAuthData(id, login, email)
                } else {
                    this.props.toggleIsAuth(false)
                }
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


export default connect(mapStateToProps, { setAuthData, toggleIsAuth })(HeaderContainer);