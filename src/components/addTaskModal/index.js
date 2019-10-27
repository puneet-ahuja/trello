import React, {useState} from 'react';
import './style.css'

function AddTaskModal({onCrossClick,addTask}) {
  const [taskValue, setTaskValue] = useState('')

  function onAddTaskClick(taskValue){
    addTask(taskValue)
    onCrossClick()
  }
  return (
    <div>
        <div className='overlay'/>
        <div className='add-task-form'>
            <div className='modal-header'>Add Task<span className='close-modal' onClick={onCrossClick}>X</span></div>
            <label>Task Name</label>
            <input type='text' value={taskValue} onChange={(event)=>setTaskValue(event.target.value)}/>
            <div className='add-task-btn' onClick={()=>onAddTaskClick(taskValue)}>Add Task</div>
        </div>
    </div>
  );
}

export default AddTaskModal;
