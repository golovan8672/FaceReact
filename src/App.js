import React from 'react';
import './App.scss';
import './normalize.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';




const App = (props) => {
  debugger
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className='main'>
          <div className="container">
            <div className="main__row">
              <Navbar links={props.state.links} />
              <Route path='/dialogs' render = {() => (<Dialogs dialogs={props.state.dialogs} messages={props.state.messages} />)}/>
              <Route path='/profile' render = {() => ( <Profile posts={props.state.posts} />)}/>



            </div>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;

