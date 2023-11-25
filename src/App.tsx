import { TaskList } from './components/task-list/task-list.tsx';
import { ToDoForm } from './components/todo-form/todo-form.tsx';
import styles from './App.module.css';

function App() {
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
