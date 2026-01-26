import styles from "./AddNewTask.module.css"  
import { TaskListData } from "../store/TaskListData";
import { useContext, useEffect, useRef } from "react";

function AddNewTask() {
    let {setTaskList } = useContext(TaskListData)
    const getTask = useRef('');

    function addTask(){
        let getTasks = getTask.current.value
        let date = new Date().toLocaleDateString(); 
        setTaskList(prev => [...prev,{task: getTasks, date: date, status: 'pending'}])
        getTask.current.value = "";
    }

    return(
        <div style={{textAlign: 'center', marginTop: '4%'}}>
            <div className="d-flex justify-content-center align-items-center">
                <input type="text" id={styles["taskInput"]} ref={getTask}/> 
                <button className={styles['addTaskBtn']} onClick={()=>addTask()}>Add Task</button>
            </div>
        </div>
    )
}

export default AddNewTask;


        