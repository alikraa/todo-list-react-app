import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { FiEdit3 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { ITask } from '../../ts/types.ts';
import styles from './tasks-list.module.css';

interface TaskProps {
  task: ITask;
  handleClickDelete: (id: string) => void;
  handleClickCheckbox: (id: string) => void;
  handleClickEdit: (id: string) => void;
}

function Task({
  task,
  handleClickDelete,
  handleClickCheckbox,
  handleClickEdit,
}: TaskProps) {
  const actionButtonStyle = useMemo(
    () => ({
      size: '1.5em',
      style: { color: 'rgb(168, 161, 172)' },
    }),
    []
  );

  return (
    <div className={styles.container}>
      <div className={styles.taskContent}>
        <label
          htmlFor={task.id}
          className={
            task.isCompleted
              ? `${styles.task} ${styles.taskDone}`
              : `${styles.task}`
          }
          onChange={() => handleClickCheckbox(task.id)}
        >
          <input type="checkbox" id={task.id} className={styles.realCheckbox} />
          <span className={styles.customCheckbox} />
          {task.text}
        </label>
        <div className={styles.actions}>
          <button
            type="button"
            aria-label="Изменить"
            className={styles.button}
            onClick={() => handleClickEdit(task.id)}
          >
            <IconContext.Provider value={actionButtonStyle}>
              <FiEdit3 />
            </IconContext.Provider>
          </button>
          <button
            type="button"
            aria-label="Удалить"
            className={styles.button}
            onClick={() => handleClickDelete(task.id)}
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
