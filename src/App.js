import React from 'react';
import './App.scss';
import './normalize.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import ProfileContainer from './components/Profile/ProfileContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogContainer from './components/Dialogs/DialogContainer';
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'
import { Route, BrowserRouter } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <div className='main'>
          <div className="container">
            <div className="main__row">
              <NavbarContainer />
                <Route path='/dialogs' render={() => (<DialogContainer />)} />
                <Route path='/profile/:userId?' render={() => (<ProfileContainer />)} />
                <Route path='/users' render={() => (<UsersContainer />)} />
                <Route path = '/login' render = {() => (<Login />)} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;

