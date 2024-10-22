import TaskItem from "./TaskItem";

const TaskList = ({ tasks, updateTask, deleteTask, toggleTaskCompletion }) => {
    return (
        <div>
            {tasks.length === 0 ? ( <p> No Task(s) Available</p> ) : (
                tasks.map((task) => (
                    <TaskItem 
                        key={task.id}
                        task={task}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                        toggleTaskCompletion={toggleTaskCompletion}
                    />
                ))
            )}
        </div>
    )
};

export default TaskList;