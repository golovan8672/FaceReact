import React from 'react';
import './App.scss';
import './normalize.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import {links, dialogs, messages,posts} from './index'



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className='main'>
          <div className="container">
            <div className="main__row">
              <Navbar links = {links}/>
              <Route path='/dialogs'>
                <Dialogs dialogs = {dialogs} messages = {messages}/>
              </Route>
              <Route path='/profile' component={Profile}>
                <Profile posts = {posts} />
              </Route>
              
              

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;

