import { useState , useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([
    {
      id: Date.now(),
      name: 'Monday Meeting',
      description: 'Meeting with the team to discuss the weekly goals',
      completed: false
    }
  ]);

  // load tasks from LocalStorage when the component mounts
  useEffect(() => {
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(savedTasks);
  }, []);

  // Save tasks to LocalStorage when the tasks state changes
  useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const addTask = (newTask) => {
      setTasks([...tasks, newTask]);
  }

  // Function to update a task
  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  }

  // Function to delete a task from the list
  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
        setTasks(tasks.filter((task) => task.id !== id));
    }
  }

  // Function to toggle task completion status
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task));
  };


  return (
    <div className='app'>
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>

  )
}

export default App;
