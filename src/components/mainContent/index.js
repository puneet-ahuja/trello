import React from 'react';
import './style.css'
import Board from '../board';
import Menu from '../menu';

function MainContent({tasks, updateTasks}) {
  return (
    <div className="main-content">
        <Board tasks={tasks} updateTasks={updateTasks}></Board>
        <Menu></Menu>
    </div>
  );
}

export default MainContent;
