import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { IoIosAddCircleOutline } from 'react-icons/io';
import styles from './todo-form.module.css';

function ToDoForm() {
  const addButtonStyle = useMemo(
    () => ({
      size: '2em',
      style: { color: 'rgb(168, 161, 172)' },
    }),
    []
  );

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          id="task-input"
          className={styles.input}
          placeholder="выучить JavaScript..."
        />
        <button
          type="submit"
          aria-label="Добавить задачу"
          className={styles.button}
        >
          <IconContext.Provider value={addButtonStyle}>
            <IoIosAddCircleOutline />
          </IconContext.Provider>
        </button>
      </form>
    </div>
  );
}

export { ToDoForm };
