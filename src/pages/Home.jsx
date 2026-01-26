// import styles from "./Home.module.css"
import AddNewTask from "../components/AddNewTask";
import TasksList from "../components/TasksList";
function HomePage(){
    return(
        <>
            <AddNewTask></AddNewTask>
            <TasksList></TasksList>
        </>
    )
}

export default HomePage;