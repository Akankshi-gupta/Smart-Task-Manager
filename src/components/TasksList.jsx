import { CiSearch } from "react-icons/ci";
import styles from "./TasksList.module.css"
import { TaskListData } from "../store/TaskListData";
import { useCallback, useContext, useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

function TasksList({divWidth}){
    let {taskLists, setTaskList} = useContext(TaskListData)
    const [filterData, setFilterData] = useState('all')
    const [toFind, setToFind] = useState('')
    const [editTask, setEditTask] = useState(null)
    const [editValue, setEditValue] = useState("")
    // const filterTasks = filterData === "all" ? taskLists : taskLists.filter(task => task.status == filterData);
    const filterTasks =
        taskLists
        .filter(task => filterData === "all" || task.status === filterData)
        .filter(task =>
            task.task.toLowerCase().includes(toFind.toLowerCase())
        );

    const statusTextMap = {
        'pending': "Pending",
        'completed': "Completed",
        "in-progress": "In Progress"
    };

    const changeStatus = useCallback((index, status) => {
        const newStatus = 
        status === 'pending' 
        ? 'in-progress' 
        : status === 'in-progress'
        ? 'completed'
        : 'pending'

        setTaskList(prev => prev.map((task, i)=> i == index ? {...task, status: newStatus} : task))
    },[setTaskList])

    const deleteTask = useCallback((i) => { 
        setTaskList(prev => prev.filter((_, index) => index !== i))
    },[setTaskList])

    function saveEdit(i){
        setTaskList(prev => prev.map((task, index) => index == i ? {...task, task: editValue.trim()} : task))
        setEditTask(null);
        setEditValue("");
    }


    return(
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
            <div className={`${styles["TaskListContainer"]} ${styles[divWidth]}`}>
                <div className={styles['searchBar']}>
                    <input type="text" className={styles['searchInput']} placeholder="Find the Task" value={toFind} onInput={(e)=>setToFind(e.target.value)}/>
                    <button className={styles['searchBtn']}><CiSearch style={{color:'white'}} size={70} onClick={()=>setToFind(toFind)}/></button>
                </div>
                
                <div style={{width: '100%', padding: '0 4%', overflowY: 'scroll'}}>
                    <div className="d-flex flex-row justify-content-between" style={{position: 'sticky', top: '0', zIndex: '2', background: 'white', paddingTop: '4%'}}>
                        <p style={{fontSize: '1.3rem',color: '#00764b', fontWeight: '600'}}>Tasks</p>
                        <select name="tasksUpdates" className={styles["taskUpdates"]} value={filterData} onChange={(e)=>setFilterData(e.target.value)}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                            <option value="in-progress">In Progress</option>
                        </select>
                    </div>
                    <table style={{width: 'inherit', borderCollapse: 'separate', borderSpacing: '0px 12px'}}>
                        <tbody>
                            {filterTasks.map((task, index)=>(
                                <tr key={index}>
                                    <td style={{width:'10%'}}>{task.date}</td>
                                    <td style={{width:'60%', padding:'0px 22px'}}>
                                        {editTask == index ? <input value={editValue} autoFocus className={styles.editInput} onChange={(e) => setEditValue(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter") {saveEdit(index)}}} onBlur={() => saveEdit(index)}/>
                                        :<p className={styles["taskNotes"]}>{task.task}</p>}
                                    </td>
                                    <td style={{width:'20%'}}>
                                        <button className={styles[task.status]} onClick={()=>changeStatus(index,task.status)}>{statusTextMap[task.status]}</button>
                                    </td>
                                    <td style={{width:'5%'}}>
                                        <button className="d-flex justify-content-center align-items-center" style={{border:'none', backgroundColor: 'transparent'}} onClick={() => {setEditTask(index); setEditValue(task.task)}}>
                                            <MdEdit />
                                        </button>
                                    </td>
                                    <td style={{width:'5%'}}>
                                        <button className="d-flex justify-content-center align-items-center" style={{border:'none', backgroundColor: 'transparent'}} onClick={()=>deleteTask(index)}>
                                            <RiDeleteBin6Line />
                                        </button>
                                    </td>
                                </tr>
                                ))
                            }
                        </tbody>
                        
                    </table>
                    
                </div>
            </div>
        </div>
    )
}

export default TasksList;