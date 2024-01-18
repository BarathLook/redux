import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Task from '../src/component/task'
import TaskList from '../src/component/taskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1 className="app__title">ToDo App</h1>
      <Task />
      <TaskList />
    </div>
  )
}

export default App
