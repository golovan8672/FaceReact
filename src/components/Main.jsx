import React from 'react';
import Content from './Content';
import Menu from './Menu';

const Main = () => {
    return (
        <div className='main'>
        <div className="container">
          <div className ="main__row">
          <Menu />
          <Content />
          </div>
        </div>
      </div>
    );
}

export default Main;