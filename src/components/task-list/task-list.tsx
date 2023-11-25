import { Task } from './task.tsx';
import { tasksData } from '../../ts/tasks-data.ts';
import styles from './task-list.module.css';

function TaskList() {
  return (
    <div className={styles.taskList}>
      {tasksData.map((item) => (
        <Task key={item.id} id={item.id} text={item.text} />
      ))}
    </div>
  );
}

export { TaskList };
