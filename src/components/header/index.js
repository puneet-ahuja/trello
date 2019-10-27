import React from 'react';
import './style.css'

function Header({onAddTaskClick}) {
  return (
    <div className="header">
        <div className='left-menu'>
            <div className='board'> <img src='./assets/icons/Board.png' alt='board' className='board-logo'/>Board</div>
            <div className='search'>Search</div> 
        </div>
        <div className='logo'>Trello</div>
        <div className='right-menu'>
            <div className='add right-menu-btn light-bg' onClick={onAddTaskClick}>+</div>
            <div className='info right-menu-btn light-bg'>i</div>
            <div className='notification right-menu-btn light-bg'>N</div>
            <img className='user right-menu-btn' src='./assets/user/user.jpg' alt='user'/>
        </div>
    </div>
  );
}

export default Header;
