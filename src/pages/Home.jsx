// import styles from "./Home.module.css"
import AddNewTask from "../components/AddNewTask";
import TasksList from "../components/TasksList";
function HomePage(){
    return(
        <>
            <AddNewTask></AddNewTask>
            <TasksList divWidth = {'homeWidth'}></TasksList>
        </>
    )
}

export default HomePage;