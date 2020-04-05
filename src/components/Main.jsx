import React from 'react';
import Profile from './Profile/Profile';
import Navbar from './Navbar/Navbar';

const Main = () => {
    return (
      <div className='main'>
        <div className="container">
          <div className="main__row">
            <Navbar />
            <Profile />
          </div>
        </div>
      </div>
    );
}

export default Main;