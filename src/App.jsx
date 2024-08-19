import { useState, useEffect } from 'react'
import NavBar from './components/navBar/NavBar'


import './App.css'
import AddButton from './components/addButton/AddButton'
import Tasks from './components/tasks/Tasks'

export default function App() {
  const [tasks, setTasks] = useState([])
  
  return (
    <div className={`w-full  h-full bg-stone-800`}>
        <NavBar tasks={tasks}></NavBar>
        <Tasks tasks={tasks} setTasks={setTasks} ></Tasks>
        <AddButton tasks={tasks} setTasks={setTasks}></AddButton>
    </div>
  )
}
