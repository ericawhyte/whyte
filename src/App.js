import React from 'react';
import './scss/App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
