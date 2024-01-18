import Task from "./component/task";
import TaskList from './component/taskList';

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">ToDo App</h1>
      <Task />
      <TaskList />
    </div>
  );
};

export default App;