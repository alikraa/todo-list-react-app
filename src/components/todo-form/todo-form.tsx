import React, { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import { IconContext } from 'react-icons';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { ITask } from '../../ts/types.ts';
import { useAppDispatch } from '../../store/hooks.ts';
import { addTask } from '../../store/taskListSlice.ts';
import styles from './todo-form.module.css';

function ToDoForm() {
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState(true);

  const addButtonStyle = useMemo(
    () => ({
      size: '2em',
      style: { color: 'rgb(168, 161, 172)' },
    }),
    []
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask: ITask = {
      id: nanoid(),
      text: inputValue,
      date: new Date().getTime(),
      isCompleted: false,
      isEdit: false,
    };

    if (inputValue.trim()) {
      dispatch(addTask(newTask));
      setInputValue('');
      setMessage(true);
    } else {
      setMessage(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            id="task-input"
            className={styles.input}
            placeholder="выучить JavaScript..."
            value={inputValue}
            onChange={handleChange}
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
      <h2 className={styles.message} hidden={message}>
        Заполните поле ввода
      </h2>
    </>
  );
}

export { ToDoForm };
