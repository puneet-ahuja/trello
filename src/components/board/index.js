import React from 'react';
import './style.css'
import BoardMenu from '../boardMenu';
import ListContainer from '../listContainer';

function Board({tasks, updateTasks}) {
  return (
    <div className="board-container">
        <BoardMenu/>
        <ListContainer tasks={tasks} updateTasks={updateTasks}/>
    </div>
  );
}

export default Board;
