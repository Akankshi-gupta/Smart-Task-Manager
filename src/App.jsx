import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from "react"
import Header from "./components/Header"
import HomePage from "./pages/Home"
import Stats from "./pages/Stats"
import { TaskListData } from "./store/TaskListData"
import Setting from './pages/Setting'

function App() {
  const [taskLists, setTaskList] = useState(()=>{
    const saved = localStorage.getItem('task');
    return saved ? JSON.parse(saved) : []

  })

  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(()=>{
    localStorage.setItem('task', JSON.stringify(taskLists));
  }, [taskLists]);

  useEffect(()=>{
    document.body.classList.toggle("dark", darkTheme)
  }, [darkTheme])

  return (
    <>
    <style>
      {`
        body {
          height: 100%;
          overflow: hidden;
        }
      `}
    </style>
      <TaskListData.Provider value={{taskLists, setTaskList}}>
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}></Header>  
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/stats" element={<Stats/>} />
          <Route path="/setting"  element={<Setting darkTheme={darkTheme} setDarkTheme={setDarkTheme} setTaskList={setTaskList}/>} />
        </Routes>
        {/* <HomePage></HomePage> */}
      </TaskListData.Provider>
    </>
  )
}

export default App
