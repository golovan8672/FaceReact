import React from 'react';
import './App.scss';
import './normalize.scss';
import './components/Header/header.scss';
import './components/Footer/footer.scss';
import './components/Profile/profile.scss';
import './components/Navbar/navbar.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';




const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className='main'>
        <div className="container">
          <div className="main__row">
            <Navbar />
            <Profile />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default App;
