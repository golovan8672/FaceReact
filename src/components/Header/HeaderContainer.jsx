import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuth, logout } from '../../redux/auth-reducer'


export class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth()
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


export default connect(mapStateToProps, { getAuth,logout})(HeaderContainer);