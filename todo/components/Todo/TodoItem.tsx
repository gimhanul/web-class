import { Todo } from '@/types/Todo';
import styles from '@/styles/TodoBox.module.css';

const TodoItem = ({ todo, toggleDone }: {
  todo: Todo,
  toggleDone: () => void
}) => {
  return (
    <div className={styles.container}>
      <input type={'checkbox'} checked={todo.done} onClick={toggleDone} />
      <p>{todo.text}</p>
    </div>
  )
}

export default TodoItem;
