import { useState } from 'react';
import { TaskList } from './components/task-list/tasks-list.tsx';
import { ToDoForm } from './components/todo-form/todo-form.tsx';
import { ITask } from './ts/types.ts';
import { tasksData } from './ts/tasks-data.ts';
import styles from './App.module.css';

function App() {
  const [tasks, setTasks] = useState<ITask[]>(tasksData);

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Список задач</h1>
      <ToDoForm tasks={tasks} setTasks={setTasks} />
      <hr />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
