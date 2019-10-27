import React from 'react';
import './style.css'
import List from '../list'

function ListContainer({tasks,updateTasks}) {
    const todoList= tasks.filter(({type})=>type==='Todo')
    const doingList= tasks.filter(({type})=>type==='Doing')
    const doneList= tasks.filter(({type})=>type==='Done')
  return (
    <div className="list-container">
        <List title={"Todo"} list={todoList} updateTasks={updateTasks}/>
        <List title={"Doing"} list={doingList} updateTasks={updateTasks}/>
        <List title={"Done"} list={doneList} updateTasks={updateTasks}/>
    </div>
  );
}

export default ListContainer;
