import styles from '@/styles/Home.module.css';
import { useForm } from 'react-hook-form';
import { useRecoilState } from "recoil";
import { todoListState } from '@/stores/TodoList'

interface ITextInput {
  text: string
}

const TodoInput = () => {

  const { register, handleSubmit, reset } = useForm<ITextInput>();
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addTodo = (data: ITextInput) => {
    setTodoList!([...todoList!, {
      text: data.text,
      done: false
    }]);
    reset({
      text: ''
    });
  }

  return (
    <>
      <div className={styles.input}>
        <input
          type={'text'}
          {...register("text")}
        />
        <button type={'submit'} onClick={handleSubmit(addTodo)}>할거야</button>
      </div>
    </>
  )
}

export default TodoInput;
