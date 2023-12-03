import { useEffect } from 'react';
import { TaskList } from './components/task-list/task-list.tsx';
import { ToDoForm } from './components/todo-form/todo-form.tsx';
import { ITask } from './ts/types.ts';
import { key, getData } from './ts/storage.ts';
import { useAppDispatch } from './store/hooks.ts';
import { addTask } from './store/taskListSlice.ts';
import styles from './App.module.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = getData(key);

    if (data) {
      data.map((item: ITask) => dispatch(addTask(item)));
    }
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Список задач</h1>
      <ToDoForm />
      <hr />
      <TaskList />
    </div>
  );
}

export default App;
