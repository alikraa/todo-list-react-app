import { Task } from './task.tsx';
import { ToDoEditForm } from '../todo-form/todo-edit-form.tsx';
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

  const editTask = (id: string) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, isEdit: !item.isEdit } : item
      )
    );
  };

  return (
    <div className={styles.taskList}>
      {tasks.map((item) =>
        item.isEdit ? (
          <ToDoEditForm
            key={item.id}
            task={item}
            tasks={tasks}
            setTasks={setTasks}
          />
        ) : (
          <Task
            key={item.id}
            task={item}
            handleClickDelete={deleteTask}
            handleClickCheckbox={changeTaskStatus}
            handleClickEdit={editTask}
          />
        )
      )}
    </div>
  );
}

export { TaskList };
