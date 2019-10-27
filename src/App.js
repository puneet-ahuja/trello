import React, {useState} from 'react';
import Header from './components/header';
import MainContent from './components/mainContent';
import './App.css';
import AddTaskModal from './components/addTaskModal';

let id= 1;
function App() {

  const [showTaskModal,setShowTaskModal] = useState(false)

  const [tasks,setTasks]=useState([
  ])

  function updateTasks(id,newCat) {
    setTasks(tasks.map(item=>item.id === id ? { ...item,type:newCat}: item))
  }

  function addTask(taskName,type) {
    setTasks([...tasks,{name:taskName,type: type || 'Todo', id: id++}])
  }
  return (
    <div className="App">
      <Header onAddTaskClick={()=>setShowTaskModal(true)}/>
      <MainContent tasks={tasks} updateTasks={updateTasks}></MainContent>
      {showTaskModal && <AddTaskModal onCrossClick={()=>setShowTaskModal(false)} addTask={addTask}/>}
    </div>
  );
}

export default App;
