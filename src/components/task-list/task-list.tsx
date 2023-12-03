import { Task } from './task.tsx';
import { ToDoEditForm } from '../todo-form/todo-edit-form.tsx';
import { useAppSelector } from '../../store/hooks.ts';
import { RootState } from '../../store/store.ts';
import styles from './task-list.module.css';

function TaskList() {
  const tasks = useAppSelector((state: RootState) => state.taskList);

  return (
    <div className={styles.taskList}>
      {tasks.map((item) =>
        item.isEdit ? (
          <ToDoEditForm key={item.id} task={item} />
        ) : (
          <Task key={item.id} task={item} />
        )
      )}
    </div>
  );
}

export { TaskList };
