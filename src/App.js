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
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className='main'>
          <div className="container">
            <div className="main__row">
              <Navbar />
              <Route path='/dialogs' component={Dialogs} />
              <Route path='/profile' component={Profile} />
              
              

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
