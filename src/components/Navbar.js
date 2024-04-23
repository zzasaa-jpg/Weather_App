import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import '../App.css';

function Navbar({ setSearch }) {
  let [isOpen, setIsOpen] = useState(false);
  let [serchTerm, setSearchTerm] = useState('');

  let handleSubmit = (event) => {
    event.preventDefault();
    setSearch(serchTerm)
    setSearchTerm("");
  }

  let handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  }

  return (
    // Navbar component.
    <nav className=' flex justify-between items-center p-[10px] bg-[#0000003b]'>
      <Link to='/'>
        <img src={logo} alt='logo' width={55} className=' shadow-2xl rounded-[4px]' />
      </Link>
      <div className={` absolute top-[80px] text-black lg:flex lg:static ${isOpen ? "block" : "hidden"}`}>
        <div className=' bg-[#ffffff] p-1 w-[150px] rounded-[4px]  lg:w-[400px] lg:bg-[#ff000000] lg:flex lg:gap-4'>
          <Link className='block lg:text-[20px] lg:text-white hover:underline' to='/'>Current Weather</Link>
          <Link className='block lg:text-[20px] lg:text-white hover:underline' to='/weather_forecast'>Weather Forecast</Link>
        </div>
      </div>
      <button className={'flex lg:hidden text-[30px] text-white border rounded-[4px] shadow-xl bg-[#00000025] cursor-pointer'} onClick={() => setIsOpen(!isOpen)}>{
        isOpen ? <ion-icon name="close-outline"></ion-icon> : <ion-icon name="add-outline"></ion-icon>}</button>
      <form onSubmit={handleSubmit}>
        <input type='text'
          placeholder='Search....'
          value={serchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className='bg-[#ffffff36] text-white py-[2px] px-[10px] sm:p-[6px] lg:p-[8px] text-[19px] rounded-[4px] placeholder-white w-44 sm:w-56 md:w-72  lg:w-96' />
      </form>
    </nav>
  )
}

export default Navbar;


