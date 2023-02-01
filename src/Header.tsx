import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Header.css'

function Header() {
  return (
    <div className="header">
       <div className='header-up'>
        <div className='left'>
            <div className='chat-with left'>Chat with us</div>
            <div className='number left'>+420 336 775 664</div>
            <div className='email left'>info@freshnesecom.com</div>
        </div>
        <div className='rigth'>
            <div className='blog rigth'>Blog</div>
            <div className='about-us rigth'>About Us</div>
            <div className='careers rigth'>Careers</div>
        </div>
        </div>
        <div className='down'>
            <div className='promo'>
                <img src='./img/Freshnesecom.svg'/>
            </div>
            <div className='search'></div>
            <div className='user logo'>
                <img src="./img/Layer.svg" />
            </div>
            <div className='cart logo'>
                <img src="./img/cart.svg"  />
            </div>
       </div>
    </div>
  );
}

export default Header;
