import { useMemo, useState } from 'react';
import { IconContext } from 'react-icons';
import { FiEdit3 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { format } from 'date-fns';
import { ITask } from '../../ts/types.ts';
import {
  changeTaskStatus,
  deleteTask,
  editTask,
} from '../../store/taskListSlice.ts';
import { useAppDispatch } from '../../store/hooks.ts';
import styles from './task-list.module.css';

interface TaskProps {
  task: ITask;
}

function Task({ task }: TaskProps) {
  const dispatch = useAppDispatch();

  const [deletion, setDeletion] = useState(false);

  const actionButtonStyle = useMemo(
    () => ({
      size: '1.5em',
      style: { color: 'rgb(168, 161, 172)' },
    }),
    []
  );

  return (
    <div
      className={
        deletion
          ? `${styles.container} ${styles.delete}`
          : `${styles.container}`
      }
    >
      <div className={styles.date}>{format(new Date(task.date), 'PPp')}</div>
      <div className={styles.taskContent}>
        <label
          htmlFor={task.id}
          className={
            task.isCompleted
              ? `${styles.task} ${styles.taskDone}`
              : `${styles.task}`
          }
          onChange={() => dispatch(changeTaskStatus(task.id))}
        >
          <input
            type="checkbox"
            id={task.id}
            className={styles.realCheckbox}
            defaultChecked={task.isCompleted}
          />
          <span className={styles.customCheckbox} />
          {task.text}
        </label>
        <div className={styles.actions}>
          <button
            type="button"
            aria-label="Изменить"
            className={styles.button}
            onClick={() => dispatch(editTask(task.id))}
          >
            <IconContext.Provider value={actionButtonStyle}>
              <FiEdit3 />
            </IconContext.Provider>
          </button>
          <button
            type="button"
            aria-label="Удалить"
            className={styles.button}
            onClick={() => {
              setDeletion(true);
              setTimeout(() => dispatch(deleteTask(task.id)), 720);
            }}
          >
            <IconContext.Provider value={actionButtonStyle}>
              <MdDelete />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
}

export { Task };
