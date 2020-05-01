import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let mapAuthStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
 }

const withAuthHOC = (Component) => {

     class AuthComponent extends React.Component{

        render(){
            debugger
            if (!this.props.isAuth) return <Redirect to = "/login"/>
            
            return <Component {...this.props} /> 
            
        }
        
        
      
    }
    return connect(mapAuthStateToProps)(AuthComponent)
   
}

export default withAuthHOC