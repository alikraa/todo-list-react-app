import { Task } from './task.tsx';
import { ToDoEditForm } from '../todo-form/todo-edit-form.tsx';
import { ITask } from '../../ts/types.ts';
import { key, setData } from '../../ts/storage.ts';
import styles from './task-list.module.css';

interface TasksListProps {
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
}

function TaskList({ tasks, setTasks }: TasksListProps) {
  const deleteTask = (id: string) => {
    const updatedList = tasks.filter((item) => item.id !== id);

    setTasks(updatedList);
    setData(key, updatedList);
  };

  const changeTaskStatus = (id: string) => {
    const updatedList = tasks.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );

    setTasks(updatedList);
    setData(key, updatedList);
  };

  const editTask = (id: string) => {
    const updatedList = tasks.map((item) =>
      item.id === id ? { ...item, isEdit: !item.isEdit } : item
    );

    setTasks(updatedList);
    setData(key, updatedList);
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
