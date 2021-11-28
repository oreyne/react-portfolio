import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import Map from './components/maps-project/Map'

function App() {

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
    <Map />
    // <Router>
    //   <div className="container">
    //     <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
    //     <Routes>
    //       <Route path='/' exact element={
    //         <>
    //         {!showAddTask && <AddTask onAdd={createTask}/>}
    //         {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : 'No tasks to show'}
    //         </>
    //       } />
    //       <Route path='/about' element={<About />} />
    //     </Routes>
    //     <Footer />
    //   </div>
    // </Router>
  );
}

export default App;
