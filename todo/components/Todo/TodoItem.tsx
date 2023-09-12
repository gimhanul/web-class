import { Todo } from '@/types/Todo';
import styles from '@/styles/TodoBox.module.css';

const TodoItem = ({ todo, toggleDone }: {
  todo: Todo,
  toggleDone: () => void
}) => {
  return (
    <label onClick={toggleDone} className={styles.container}>
      <input type={'checkbox'} checked={todo.done} onChange={() => {}}/>
      <p>{todo.text}</p>
    </label>
  )
}

export default TodoItem;
