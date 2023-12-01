import React, { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import { IconContext } from 'react-icons';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { ITask } from '../../ts/types.ts';
import { key, setData } from '../../ts/storage.ts';
import styles from './todo-form.module.css';

interface ToDoFormProps {
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
}

function ToDoForm({ tasks, setTasks }: ToDoFormProps) {
  const [inputValue, setInputValue] = useState('');

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
      date: '',
      isCompleted: false,
      isEdit: false,
    };

    setTasks([...tasks, newTask]);
    setData(key, [...tasks, newTask]);
    setInputValue('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
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
  );
}

export { ToDoForm };
