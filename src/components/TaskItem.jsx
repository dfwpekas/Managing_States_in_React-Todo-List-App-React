import { useState } from "react";

const TaskItem = ({ task, updateTask, deleteTask, toggleTaskCompletion }) => {
    // Declare State Variables for editing mode, edited task name and description
    const [isEditing, setIsEditing] = useState(false);
    const [editedTaskName, setEditedTaskName] = useState(task.name);
    const [editedTaskDescription, setEditedTaskDescription] = useState(task.description);

    // Function to handle the form submission when editing task

    const handleEditSubmit = (e) => {
        e.preventDefault(); // prevent default form submission behaviour
        updateTask({
            ...task,
            name: editedTaskName,
            description: editedTaskDescription
        })
        setIsEditing(false);
    };

    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <form onSubmit={handleEditSubmit}>
                    <input type="text" 
                    value={editedTaskName}
                    onChange={(e) => setEditedTaskName(e.target.value)}/>
                    <textarea 
                    value={editedTaskDescription}
                    onChange={(e) => setEditedTaskDescription(e.target.value)}
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <>
                    <h2>{task.name}</h2>
                    <p>{task.description}</p>
                    <button onClick={() => toggleTaskCompletion(task.id)}>
                        {task.completed ? 'Uncompleted' : 'Completed'}
                    </button>
                    <button onClick={() => setIsEditing(true)}>Edit Task</button>
                    <button onClick={() => deleteTask(task.id)}>Delete Task</button>
                </>
            )}
        </div>
    )
};

export default TaskItem;