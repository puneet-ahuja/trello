import React from 'react';
import './style.css'

function Card({title,id,category}) {

    function dragStart(event,id){
        event.dataTransfer.setData("id",id)
        event.dataTransfer.setData("category",category)
    }
  return (
    <div id={id} className="card" draggable={true} onDragStart={(e)=>dragStart(e,id)}>
        {title}
    </div>
  );
}

export default Card;
