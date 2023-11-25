import { IconContext } from 'react-icons';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { FiEdit3 } from 'react-icons/fi';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Список задач</h1>
      <div className={styles.container}>
        <form className={styles.form}>
          <input
            type="text"
            id="task-input"
            className={styles.input}
            placeholder="выучить JavaScript..."
          />
          <button type="submit" title="Добавить" className={styles.button}>
            <IconContext.Provider
              // eslint-disable-next-line react/jsx-no-constructed-context-values
              value={{ size: '2em', style: { color: 'rgb(168, 161, 172)' } }}
            >
              <IoIosAddCircleOutline />
            </IconContext.Provider>
          </button>
        </form>
      </div>
      <hr />

      <div className={styles.taskList}>
        <div className={styles.container}>
          <div className={styles.taskContent}>
            <label
              htmlFor="checkbox"
              className={`${styles.task} ${styles.taskDone}`}
            >
              <input
                type="checkbox"
                id="checkbox"
                className={styles.realCheckbox}
              />
              <span className={styles.customCheckbox} />
              Задача 1
            </label>
            <div className={styles.actions}>
              <button type="button" title="Изменить" className={styles.button}>
                <IconContext.Provider
                  // eslint-disable-next-line react/jsx-no-constructed-context-values
                  value={{
                    size: '1.5em',
                    style: { color: 'rgb(168, 161, 172)' },
                  }}
                >
                  <FiEdit3 />
                </IconContext.Provider>
              </button>
              <button type="button" title="Удалить" className={styles.button}>
                <IconContext.Provider
                  // eslint-disable-next-line react/jsx-no-constructed-context-values
                  value={{
                    size: '1.5em',
                    style: { color: 'rgb(168, 161, 172)' },
                  }}
                >
                  <MdDelete />
                </IconContext.Provider>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.taskContent}>
            <label
              htmlFor="checkbox-2"
              className={`${styles.task} ${styles.taskDone}`}
            >
              <input
                type="checkbox"
                id="checkbox-2"
                className={styles.realCheckbox}
              />
              <span className={styles.customCheckbox} />
              Задача 2
            </label>
            <div className={styles.actions}>
              <button type="button" title="Изменить" className={styles.button}>
                <IconContext.Provider
                  // eslint-disable-next-line react/jsx-no-constructed-context-values
                  value={{
                    size: '1.5em',
                    style: { color: 'rgb(168, 161, 172)' },
                  }}
                >
                  <FiEdit3 />
                </IconContext.Provider>
              </button>
              <button type="button" title="Удалить" className={styles.button}>
                <IconContext.Provider
                  // eslint-disable-next-line react/jsx-no-constructed-context-values
                  value={{
                    size: '1.5em',
                    style: { color: 'rgb(168, 161, 172)' },
                  }}
                >
                  <MdDelete />
                </IconContext.Provider>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
