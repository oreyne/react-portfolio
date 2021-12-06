import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './../../css/tracker.css';
import Header from './../task-tracker-project/Header'
import Tasks from './../task-tracker-project/Tasks'
import AddTask from './../task-tracker-project/AddTask'
import Footer from './../task-tracker-project/Footer'
import About from './../task-tracker-project/About'
import TaskDetails from './../task-tracker-project/TaskDetails'

const AppTracker = () => {
  const [showAddTask, setShowAddTask] = useState(true)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Mechanic Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 4,
      text: "Meeting at Teams",
      day: "Feb 6th at 1:30pm",
      reminder: true
    }
  ])

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  // Add Tasks
  const createTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      <Routes>
        <Route path='/' element={
          <>
          {!showAddTask && <AddTask onAdd={createTask}/>}
          {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : 'No tasks to show'}
          </>
        } />
        <Route path='/tracker/about' element={<About />} />
        <Route path='/task/:id' element={<TaskDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default AppTracker
