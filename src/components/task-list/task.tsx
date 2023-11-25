import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { FiEdit3 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import styles from './task-list.module.css';

function Task({ id, text }) {
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
        <label htmlFor={id} className={styles.task}>
          <input type="checkbox" id={id} className={styles.realCheckbox} />
          <span className={styles.customCheckbox} />
          {text}
        </label>
        <div className={styles.actions}>
          <button type="button" aria-label="Изменить" className={styles.button}>
            <IconContext.Provider value={actionButtonStyle}>
              <FiEdit3 />
            </IconContext.Provider>
          </button>
          <button type="button" aria-label="Удалить" className={styles.button}>
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