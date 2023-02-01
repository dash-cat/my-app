import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body'
import Stars from './Stars';


function HomeApp() {
  return (
    <div className="HomeApp">
      <Stars/>
        <Header/>
        <Body/>
      <footer ></footer>
    </div>
  );
}

export default HomeApp;
