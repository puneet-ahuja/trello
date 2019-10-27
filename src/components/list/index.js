import React from 'react';
import './style.css'
import Card from '../card';



function List({title,list, updateTasks}) {
    function Drop(event){
        const id = parseInt(event.dataTransfer.getData("id"))
        const category = event.dataTransfer.getData("category")
        if(category !== title){
            updateTasks(id,title)
        }
    }

    function DragOver(event){
        event.preventDefault()
    }

  return (
    <div className="list" onDrop={(e)=>Drop(e)} onDragOver={(e)=>DragOver(e)}>
        <div className='list-header'>
            <div className='list-title'>{title}</div>
            <div>...</div>
        </div>
        {list.map( ({name,id}) => (<Card title={name} id={id} category={title}></Card>))}
        <div className='add-card'>Add a card...</div>
    </div>
  );
}

export default List;