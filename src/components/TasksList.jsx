import { CiSearch } from "react-icons/ci";
import styles from "./TasksList.module.css"
import { TaskListData } from "../store/TaskListData";
import { useContext } from "react";

function TasksList(){
    let {taskLists} = useContext(TaskListData)

    const statusTextMap = {
        'pending': "Pending",
        'completed': "Completed",
        "in-progress": "In Progress"
    };
    return(
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
            <div className={styles["TaskListContainer"]}>
                <div className={styles['searchBar']}>
                    <input type="text" className={styles['searchInput']}/>
                    <button className={styles['searchBtn']}><CiSearch style={{color:'white'}} size={70} /></button>
                </div>
                
                <div style={{width: '100%', padding: '4%'}}>
                    
                    <div className="d-flex flex-row justify-content-between">
                        <p style={{fontSize: '1.3rem',color: '#00764b'}}>Tasks</p>
                        <select name="tasksUpdates" className={styles["taskUpdates"]}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                            <option value="in-progress">In Progress</option>
                        </select>
                    </div>
                    <table style={{width: 'inherit', borderCollapse: 'separate', borderSpacing: '0px 12px'}}>
                        <tbody>
                            {taskLists.map((task, index)=>(
                                <tr key={index}>
                                    <td style={{width:'20%'}}>{task.date}</td>
                                    <td style={{width:'60%', fontSize: '18px'}}>{task.task}</td>
                                    <td style={{width:'20%'}}>
                                        <div className={styles[task.status]}>{statusTextMap[task.status]}</div>
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