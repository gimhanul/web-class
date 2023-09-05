import styles from '@/styles/Home.module.css';
import TodoInput from '@/components/Todo/TodoInput';
import TodoItem from '@/components/Todo/TodoItem';
import { useContext } from 'react';
import { TodoContext } from '@/pages/_app';

const TodoList = () => {

  const { todoList, setTodoList } = useContext(TodoContext);

  const toggleDone = (index: number) => {
    const updatedTodoList = [...todoList!];
    updatedTodoList[index].done = !updatedTodoList[index].done;
    setTodoList!(updatedTodoList);
  }

  return (
    <>
      <section className={`${styles.container} ${styles.todo}`}>
        <h2>Todo</h2>
        <TodoInput />
        {todoList!.map((t, index) => <TodoItem
          todo={t}
          toggleDone={() => toggleDone(index)}
          key={t.text}
        />)}
      </section>
    </>
  )
}

export default TodoList;
