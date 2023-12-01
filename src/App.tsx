import { useEffect, useState } from 'react';
import { TaskList } from './components/task-list/task-list.tsx';
import { ToDoForm } from './components/todo-form/todo-form.tsx';
import { tasksData } from './ts/tasks-data.ts';
import { ITask } from './ts/types.ts';
import { key, getData } from './ts/storage.ts';
import styles from './App.module.css';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const data = getData(key);

    if (data) {
      setTasks(data);
    } else {
      setTasks(tasksData);
    }
  }, []);

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
