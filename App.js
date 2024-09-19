import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  // State for tasks
  const [task, setTask] = useState('');  // Task input value
  const [tasks, setTasks] = useState([]); // List of tasks

  // State for increment/decrement functionality
  const [number, setNumber] = useState(0); // Number to increment/decrement

  // Handle task input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Handle task submission
  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(''); // Clear the input field
    }
  };

  // Increment the number
  const incrementNumber = () => {
    setNumber(number + 1);
  };

  // Decrement the number
  const decrementNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div className="App">
      <Header />

      <main>
        {/* Task management section */}
        <h1><u>Add a New Task</u></h1>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Enter a task"
          />
          <button type="submit">Add Task</button>
        </form>

        <h3>Task List</h3>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>

        {/* Increment/Decrement section */}
        <h1><u>Increment / Decrement</u></h1>
        <div>
          <button onClick={incrementNumber}>Increment</button>
          <button onClick={decrementNumber}>Decrement</button>
          <p>Current Number: {number}</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
