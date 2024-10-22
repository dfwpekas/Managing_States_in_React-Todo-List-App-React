import { useState } from "react"; // Import Use State from react


const TaskForm = ({ addTask }) => {
    // Declare state variables for the name, description field and error should incase

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [error, setError] = useState('');

    // Function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (!taskName || !taskDescription)  { // To Check if fields are empty
            setError('Both Fields are required.'); // Set error message
            return;
        }

        // task object blueprint
        const newTask = {
            id: Date.now(),
            name: taskName,
            description: taskDescription,
            completed: false // Setting the completed status to false (default)
        };

        addTask(newTask);
        setTaskName('');
        setTaskDescription('');
        setError('');

    }
        return (
            <form onSubmit={handleSubmit} className="task-form">
                <div>
                    <input type="text"
                    placeholder="Task Name" 
                    value={taskName}
                    onChange={(e)=> setTaskName(e.target.value)} className="form-input"/>
                </div>
    
                <div>
                    <textarea
                    placeholder="Task Description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}  className="form-input"/>

                </div>
    
                {error && <p style={{color: 'red'}}>{error}</p>}
                <button type="submit" className="form-button">Add Task</button>
            </form>
    
        ) 
};

    
export default TaskForm;