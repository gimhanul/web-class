import styles from '@/styles/Home.module.css';
import TodoInput from '@/components/Todo/TodoInput';
import TodoItem from '@/components/Todo/TodoItem';
import { useRecoilState } from "recoil";
import { todoListState } from '@/stores/TodoList';

const TodoList = () => {

  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleDone = (index: number) => {
    setTodoList(
      [...todoList.slice(0, index), {
        ...todoList[index],
        done: !todoList[index].done
      }, ...todoList.slice(index + 1)]
    );
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
