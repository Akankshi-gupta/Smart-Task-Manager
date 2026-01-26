import { useEffect, useState } from "react"
import Header from "./components/Header"
import HomePage from "./pages/Home"
import { TaskListData } from "./store/TaskListData"

function App() {
  const [taskLists, setTaskList] = useState(()=>{
    const saved = localStorage.getItem('task');
    return saved ? JSON.parse(saved) : []

  })

  useEffect(()=>{
    localStorage.setItem('task', JSON.stringify(taskLists));
  }, [taskLists]);

  return (
    <TaskListData.Provider value={{taskLists, setTaskList}}>
      <Header></Header>  
      <HomePage></HomePage>
    </TaskListData.Provider>
  )
}

export default App
