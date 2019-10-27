import React from 'react';
import './style.css'

function BoardMenu() {
  return (
    <div className="board-menu">
        <div className='board-item'>
            <span>Things to get Done</span>
            <img className='icon' src='./assets/icons/Board.png' alt='Star'/>
        </div>
        <div className='board-item'>
            Team Awesome
            <span className='label'>BC</span>
        </div>
        <div className='board-item'>
            <img className='icon' src='./assets/icons/Board.png' alt='Team'/>
            <span>Team Visible</span>
        </div>
        <div className='board-item'><img className='icon' src='./assets/icons/Board.png' alt='Team'/></div>
    </div>
  );
}

export default BoardMenu;
