import React,{useState} from 'react'
import DayPickerInput from 'react-day-picker/types/DayPickerInput';
// import "react-day-picker/lib/style.css"
// import dateFnsFormat from "date-fns/format";
const AddTask =({onCancel, onAddTask})=>{
    const [task, settask] = useState("")
    const [date, setdate] = useState(null);
    return(
        <div className="add-task-dialog">
            <input value={task} onChange={(event)=> settask(event.target.value)}/>
            <div className="add-task-actions-container">
                <div className="btns-container">
                    <button className="add-btn" onClick={()=>{onAddTask(task);onCancel();settask("")}}>Add Task</button>
                    <button className="cancel-btn" onClick={()=> {
                        onCancel();
                        settask("");
                    }}>Cancel Task</button>
                </div>
                <div className="icon-container">
                    <DayPickerInput onDatChange={(day)=>setdate(day)}/>
                </div>
            </div>
        </div>
    );
}
function Tasks() {
    const [showAddTask, setshowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);
    const addNewTask =(text)=>{
        setTasks((preState)=>[...preState,text])
    }
    return (
        <div className="tasks">
        <h1>Inbox</h1>
        <div className="add-task-btn" onClick={()=> setshowAddTask((preState)=> !preState)}>
        <span className="plus">+</span>
        <span className="add-task-text">Add Task</span>
        </div>
        {
        showAddTask && <AddTask onAddTask={addNewTask} onCancel={()=> setshowAddTask(false)}/>
        }
        {
            tasks.length >0 ?
            tasks.map(task =>{
                return(
                <p>{task}</p>
            )}):<p>No Task Yet</p>
        }
        </div>
    )
}

export default Tasks
