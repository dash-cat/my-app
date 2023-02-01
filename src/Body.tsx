import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Body.css'


function Body() {
  return (
    <div className="body">
       <div className='item'> Item 
       <div>
        <img className='prev' src="./img/Rectangle.png" />
       </div>
       <div>Description
        <span>  price 0,23$</span>
       </div>
       <div className='count'>
        <div className='add btn'> + Add</div>
        <div className='del btn'> - Delete</div>
       </div>
       </div>
       <div className='item'> Товар </div>
       <div className='item'> Товар </div>
       <div className='item'> Товар </div>
       <div className='item'> Товар </div>
       <div className='item'> Товар </div>
    </div>
  );
}

export default Body;
