import React, { useMemo, useState } from 'react';
import { IconContext } from 'react-icons';
import { MdDone } from 'react-icons/md';
import { ITask } from '../../ts/types.ts';
import { useAppDispatch } from '../../store/hooks.ts';
import { deleteTask, editTaskText } from '../../store/taskListSlice.ts';
import styles from './todo-form.module.css';

interface ToDoFormEdit {
  task: ITask;
}

function ToDoEditForm({ task }: ToDoFormEdit) {
  const dispatch = useAppDispatch();

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

    const updatedTask: ITask = {
      id: task.id,
      text: editValue,
      date: new Date().getTime(),
      isCompleted: task.isCompleted,
      isEdit: task.isEdit,
    };

    if (editValue.trim()) {
      dispatch(editTaskText(updatedTask));
    } else {
      dispatch(deleteTask(task.id));
    }
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
