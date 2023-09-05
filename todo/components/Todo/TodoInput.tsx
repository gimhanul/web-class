import styles from '@/styles/Home.module.css';
import { useContext } from 'react';
import { TodoContext } from '@/pages/_app';
import { useForm } from 'react-hook-form';

interface ITextInput {
  text: string
}

const TodoInput = () => {

  const { register, handleSubmit, reset } = useForm<ITextInput>();
  const { todoList, setTodoList } = useContext(TodoContext);

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
