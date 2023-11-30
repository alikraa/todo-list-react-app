import React, { useMemo, useState } from 'react';
import { IconContext } from 'react-icons';
import { MdDone } from 'react-icons/md';
import { ITask } from '../../ts/types.ts';
import styles from './todo-form.module.css';

interface ToDoFormEdit {
  task: ITask;
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
}

function ToDoEditForm({ task, tasks, setTasks }: ToDoFormEdit) {
  const [editValue, setEditValue] = useState(task.text);

  const addButtonStyle = useMemo(
    () => ({
      size: '2em',
      style: { color: 'rgb(168, 161, 172)' },
    }),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTasks(
      tasks.map((item) =>
        item.id === task.id
          ? {
              ...item,
              text: editValue,
              isEdit: !item.isEdit,
              isCompleted: false,
            }
          : item
      )
    );
  };

  return (
    <div className={`${styles.container} ${styles.containerEdit}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          id="task-input"
          className={styles.input}
          placeholder="выучить JavaScript..."
          value={editValue}
          onChange={handleChange}
        />
        <button
          type="submit"
          aria-label="Добавить задачу"
          className={styles.button}
        >
          <IconContext.Provider value={addButtonStyle}>
            <MdDone />
          </IconContext.Provider>
        </button>
      </form>
    </div>
  );
}

export { ToDoEditForm };
