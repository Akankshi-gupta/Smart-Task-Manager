import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from "react"
import Header from "./components/Header"
import HomePage from "./pages/Home"
import Stats from "./pages/Stats"
import { TaskListData } from "./store/TaskListData"

function App() {
  <style>
    {`
      body {
        height: 100%;
        overflow: hidden;
      }
    `}
  </style>
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
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/stats" element={<Stats/>} />
      </Routes>
      {/* <HomePage></HomePage> */}
    </TaskListData.Provider>
  )
}

export default App
