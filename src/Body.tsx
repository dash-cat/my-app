import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Body.css'
import Mandelbrot from './Mandelbrot'

function Body() {
  return (
    <div className="body">
       <div className='item'> Item 
       <div>
       <Mandelbrot></Mandelbrot>
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
