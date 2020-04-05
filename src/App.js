import React from 'react';
import './scss/App.scss';
import './scss/normalize.scss';
import './scss/header.scss';
import './scss/footer.scss';
import './scss/content.scss';
import './scss/menu.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';




const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}


export default App;
