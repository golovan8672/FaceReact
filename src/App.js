import React from 'react';
import './App.scss';
import './normalize.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProfileContainer from './components/Profile/ProfileContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogContainer from './components/Dialogs/DialogContainer';
import UsersContainer from './components/Users/UsersContainer'
import { Route, BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className='main'>
          <div className="container">
            <div className="main__row">
              <NavbarContainer />
              <Route path='/dialogs' render = {() => (<DialogContainer />)}/>
              <Route path='/profile' render = {() => ( <ProfileContainer />)}/>
              <Route path ='/users' render = {() => (<UsersContainer/>)}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;

