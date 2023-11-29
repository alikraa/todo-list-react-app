import { Task } from './task.tsx';
import { ITask } from '../../ts/types.ts';
import styles from './tasks-list.module.css';

interface TasksListProps {
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
}

function TaskList({ tasks, setTasks }: TasksListProps) {
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const changeTaskStatus = (id: string) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  return (
    <div className={styles.taskList}>
      {tasks.map((item) => (
        <Task
          key={item.id}
          id={item.id}
          text={item.text}
          isCompleted={item.isCompleted}
          handleClickDelete={deleteTask}
          handleClickCheckbox={changeTaskStatus}
        />
      ))}
    </div>
  );
}

export { TaskList };
