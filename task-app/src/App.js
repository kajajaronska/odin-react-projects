import { useState } from 'react';
import React from 'react';
import Overview from './components/Overview';

// Create variable to hold index;
let index = 0;


function App() {
  // Create state variable to hold current input value
  const [task, setTask] = useState('');
  // Create state variable to hold tasks array
  const [tasksArr, setTasks] = useState([]);

  return (
    <div>
      <label>Task description</label>
      <input value={task} onChange={e=>{
        setTask(e.target.value);
        }}></input>
      <button onClick={()=>{
        // Clear input value
        setTask('');

        // Push current value state variable to the array held in state
        setTasks([...tasksArr, {index: index++, name: task}]);
      }}>Add task</button>

      <Overview tasks={tasksArr}/> 
    </div>
  )
}

export default App;
